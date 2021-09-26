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
  communicationChannel = thermostatId + 1;
  RFCommunicatorSetup(communicationChannel + 1, communicationChannel);
    
  q ++;
  char msg[32] = {0};
  constructMessage(communicationChannel, q, msg);
  RFCommunicatorSend(msg);
  printToSerial(communicationChannel, msg, true);
  
  char data[32];
  RFCommunicatorListen(data, true);
  Serial.println(data);

  Serial.println();
  Serial.println("delaying 2 sec.");
  Serial.println();
  delay(2000);
}


void constructMessage(short int senderId, int payload, char msg[32]) {
  sprintf(msg, "response( %d | ⍑ >>> ⌂:  %d)", senderId, payload);
}

void printToSerial(short int communicationChannel, char data[32], bool hubToThermostat) {
  Serial.println();
  Serial.print(communicationChannel);     
  Serial.print(" | ");
  if(hubToThermostat)
    Serial.print("⌂ >>> ⍑ ");
  else
    Serial.print("⍑ >>> ⌂ ");
  Serial.print(communicationChannel);
  Serial.print(" : ");
  Serial.print(data);
}
