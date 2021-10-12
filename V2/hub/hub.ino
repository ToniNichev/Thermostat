#include "RFCommunicator.h"
#include <EEPROM.h>

short int mode = 0;
int q = 0;
short int thermostatId = 0;
short int communicationChannel;

void setup() {
  Serial.begin(9600);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }
  Serial.println();
  Serial.println("PROGRAM STARTED");  
}

void loop() {
  thermostatId = 0;
  while(thermostatId < 2) {
    // # 1 - setup
    communicationChannel = (thermostatId * 2 ) + 1;
    RFCommunicatorSetup(communicationChannel, communicationChannel + 1);
    delay(100);
  
    // # 2 - send    
    q ++;
    char msg[32];
    Serial.println(communicationChannel);
    constructMessage(communicationChannel, q, msg);
    RFCommunicatorSend(msg);
    //printToSerial(communicationChannel, msg, true);
  
    // # 3 - receive
    
    char data[32];
    RFCommunicatorListen(data, true);
    printToSerial(communicationChannel, data, false);
    //Serial.println(data);
    
  
    Serial.println();
    Serial.println("delaying 2 sec.");
    Serial.println();
    delay(2000);
    thermostatId ++;
  }
}


void constructMessage(short int communicationChannel, int payload, char msg[32]) {
  sprintf(msg, "(%d | ⌂ says: payload:  %d)", communicationChannel, payload);
}

void printToSerial(short int communicationChannel, char data[32], bool hubToThermostat) {
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
