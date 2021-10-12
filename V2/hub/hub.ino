#include <RF24.h>
#include <EEPROM.h>

short int mode = 0;
int q = 0;
short int thermostatId = 0;
short int communicationChannel;
RF24 radio(9, 8);  // CE, CSN
const byte addresses[][6] = {"00001", "00002", "00003", "00004"};

void setup() {
   
  Serial.begin(9600);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }
  Serial.println();
  Serial.println("PROGRAM STARTED");  

  radio.begin();
  radio.openWritingPipe(addresses[1]); 
  //radio.openReadingPipe(1, addresses[1]); // 00001
  radio.setPALevel(RF24_PA_MIN);  
  radio.stopListening();
}

void loop() {

    // # 2 - send    
    q ++;

    char text[] = "this is a test 123";
    radio.write(&text, sizeof(text));

  
    Serial.println();
    Serial.println("delaying 2 sec.");
    Serial.println();
    delay(2000);
    //thermostatId ++;
  //}
}


void constructMessage(short int communicationChannel, int payload, char msg[64]) {
  sprintf(msg, "(%d | ⌂ 12345678910 says: payload:  %d)", communicationChannel, payload);
}

void printToSerial(short int communicationChannel, char data[64], bool hubToThermostat) {
  Serial.println();
  Serial.print(communicationChannel);     
  Serial.print(" | ");
  if(hubToThermostat)
    Serial.print("⌂ >>> ⍑ ");
  else
    Serial.print("⍑ >>> ⌂ ");
  Serial.print(" : ");
  Serial.print(data);
}
