#include <Ethernet.h>
#include "RFCommunicator.h"
#include "string_to_float.h"
#include <DHT.h>
#include <EEPROM.h>

#define RELAY_FAN_LOW 7
#define RELAY_FAN_HIGH 6
#define RELAY_COOL 5
#define RELAY_HEAT 3


// thermostat settings
short int thermostatId = 0;

// program variables
//char serverData[100] = "";
int len;
short int programMode = 0;
short int communicationChannel = thermostatId;

//Constants
#define DHTPIN 4     // what pin we're connected to
#define DHTTYPE DHT22   // DHT 22  (AM2302)
DHT dht(DHTPIN, DHTTYPE); //// Initialize DHT sensor for normal 16mhz Arduino

float hum;  //Stores humidity value
float temp; //Stores temperature value
char t[4] = "";
char msg[32] = "";
short int thermostatMode = 0;

void setup() {
  Serial.begin(9600);
  dht.begin();
  // set up 4 relay pins
  pinMode(RELAY_FAN_LOW, OUTPUT);
  pinMode(RELAY_FAN_HIGH, OUTPUT);
  pinMode(RELAY_COOL, OUTPUT);
  pinMode(RELAY_HEAT, OUTPUT);

  // set up all relays to 0
  digitalWrite(RELAY_FAN_LOW, HIGH);
  digitalWrite(RELAY_FAN_HIGH, HIGH);
  digitalWrite(RELAY_COOL, HIGH);
  digitalWrite(RELAY_HEAT, HIGH);
  
  RFCommunicatorSetup();
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }  
  Serial.println("================== PROGRAM STARTED ======================");
}



void loop() {
  Serial.println();
  Serial.println();
  delay(150);

  Serial.print("Waiting for data from the HUB on channel :");
  Serial.print(thermostatId);
  Serial.println(); 

  char serverData[64] = "";
  while(RFCommunicatorListen(serverData, communicationChannel)!=true) {
    delay(10);
  }

  Serial.print("⌂ >>> ⍑ : "); // Received data from the HUB
  Serial.print(serverData);
  Serial.println();
  delay(3000);  

  hum = dht.readHumidity();
  temp = dht.readTemperature();  

  dtostrf(hum, 4, 2, t); 
  msg[0] = '[';
  msg[1] = '0' + thermostatId;    
  msg[2] = ',';
  msg[3] = t[0];
  msg[4] = t[1];
  msg[5] = t[2];
  msg[6] = t[3];
  msg[7] = t[4];
  msg[8] = ',';
  dtostrf(temp, 4, 2, t); 
  msg[9] = t[0];
  msg[10] = t[1];
  msg[11] = t[2];
  msg[12] = t[3];
  msg[13] = t[4];
  msg[14] = ',';
  msg[15] = '0';
  msg[16] = ']';       

  Serial.print("⍑ >>> ⌂ : "); // Sending data [ID, HUMIDITY, TEMPERATURE, EMPTY] to the HUB
  Serial.print(msg);
  Serial.println();


  RFCommunicatorSend(msg, communicationChannel);
  delay(1000);

  float *serverVals = parseToValues(serverData);
  short int fanMode = (int) serverVals[3];  
  short int thermostatMode = (int) serverVals[2];
  float requiredTemperature = serverVals[1];

  
  delay(100);
  
  // Set fan mode
  switch(fanMode) {
    case 0:
      digitalWrite(RELAY_FAN_LOW, HIGH);
      digitalWrite(RELAY_FAN_HIGH, HIGH);
      break;
    case 1:
      digitalWrite(RELAY_FAN_LOW, LOW);
      digitalWrite(RELAY_FAN_HIGH, HIGH);    
      break;
    case 2:
      digitalWrite(RELAY_FAN_LOW, HIGH);
      digitalWrite(RELAY_FAN_HIGH, LOW);    
      break;      
  }
  
  // Set temperature
  switch(thermostatMode) {
    case 1:
      digitalWrite(RELAY_COOL, HIGH);    
      digitalWrite(RELAY_HEAT, HIGH);
      break;
    case 2:
      // COOL
      digitalWrite(RELAY_HEAT, HIGH);      
      if(temp > requiredTemperature) {
        digitalWrite(RELAY_COOL, LOW);
        Serial.println("COOLING: LOW");
      }
      else {
        digitalWrite(RELAY_COOL, HIGH);
        Serial.println("COOLING: HIGH");
      }
      break;
     case 3:
      // HEAT
      digitalWrite(RELAY_COOL, HIGH);      
      if(temp < requiredTemperature) {
        digitalWrite(RELAY_HEAT, LOW);
        Serial.println("HEATING: LOW");
      }
      else {
        digitalWrite(RELAY_HEAT, HIGH);
        Serial.println("HEATING: HIGH");
      }     
      break;
    
      Serial.println("#####################");
      Serial.print("required temperature: ");
      Serial.print(requiredTemperature);
      Serial.println();      
      Serial.print("curent temp: ");
      Serial.print(temp);
      Serial.println();      
      break;
  }
}
