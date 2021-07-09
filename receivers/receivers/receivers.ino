#include <Ethernet.h>
#include "RFCommunicator.h"
#include <DHT.h>


// thermostat settings
short int thermostatId = 0;

// program variables
char serverData[100] = {0};
int len;
short int programMode = 0;
short int communicationChannel = 0;

//Constants
#define DHTPIN 4     // what pin we're connected to
#define DHTTYPE DHT22   // DHT 22  (AM2302)
DHT dht(DHTPIN, DHTTYPE); //// Initialize DHT sensor for normal 16mhz Arduino

float hum;  //Stores humidity value
float temp; //Stores temperature value
char t[4] = "";
char msg[32] = "";

void setup() {
  Serial.begin(9600);
  dht.begin();
  RFCommunicatorSetup();
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }  
  Serial.println("================== PROGRAM STARTED ======================");
}

void loop() {
  Serial.println(" -------------------------- ");
  Serial.println();
  delay(50);

  if(RFCommunicatorListen(serverData, communicationChannel)) {
    Serial.print("serverData: ");
    Serial.print(serverData);
    Serial.println();
    Serial.println();
    delay(2000);  
  }
  hum = dht.readHumidity();
  temp = dht.readTemperature();  

  dtostrf(hum, 4, 2, t); 
  msg[0] = '[';
  msg[1] = '0';    
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

  Serial.print("msg: ");
  Serial.print(msg);
  Serial.println();

  Serial.println("sending data ... ");
  RFCommunicatorSend(msg, communicationChannel);
  delay(2000);
}
