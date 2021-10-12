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

    communicationChannel = thermostatId + 1;
    RFCommunicatorSetup(communicationChannel + 1, communicationChannel);
}

void loop() {
  thermostatId = 0;
  //while(thermostatId < 2) {
    // # 1 - setup
    //communicationChannel = thermostatId + 1;
    //RFCommunicatorSetup(communicationChannel + 1, communicationChannel);
  
    // # 2 - send    
    q ++;
    char msg[128] = "thermostat 1234566789011 12 13 14 15 16 16 18 19 20";
    //constructMessage(communicationChannel, q, msg);
    RFCommunicatorSend(msg);
    //printToSerial(communicationChannel, msg, true);
  
    // # 3 - receive
    /*
    char data[32];
    RFCommunicatorListen(data, true);
    printToSerial(communicationChannel, data, false);
    //Serial.println(data);
    */
  
    Serial.println();
    Serial.println("delaying 2 sec.");
    Serial.println();
    delay(2000);
    //thermostatId ++;
  //}
}


void constructMessage(short int communicationChannel, int payload, char msg[128]) {
  sprintf(msg, "(%d | ⌂ 12345678910 says: payload:  %d)", communicationChannel, payload);
}

void printToSerial(short int communicationChannel, char data[128], bool hubToThermostat) {
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
