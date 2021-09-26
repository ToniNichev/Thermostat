#include "RFCommunicator.h"
#include <EEPROM.h>
#define THERMOSTAT_EPROM_ADDRESS 3

short int mode = 0;
int q = 0;
short int senderId;
short int communicationChannel;

void setup() {
  Serial.begin(9600);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }
  Serial.println();
  Serial.println("PROGRAM STARTED");  


  //writeIntIntoEEPROM(THERMOSTAT_EPROM_ADDRESS, 0);  // !!!  force to set up thermostat in ADD thermostat mode !!!!
  senderId = readIntFromEEPROM(THERMOSTAT_EPROM_ADDRESS);
  communicationChannel = senderId + 1;
  
  RFCommunicatorSetup(communicationChannel, communicationChannel + 1);
}

void loop() {
  q ++;
  char msg[32] = {0};
  constructMessage(senderId, q, msg);
  RFCommunicatorSend(msg);

  
  char data[32];
  RFCommunicatorListen(data, true);
  Serial.println(data);

  Serial.println();
  Serial.println("delaying 2 sec.");
  Serial.println();
  delay(2000);
}


void constructMessage(short int senderId, int payload, char msg[32]) {
  sprintf(msg, "%d | ⌂ >>> ⍑:  %d", senderId, payload);
}

void writeIntIntoEEPROM(int address, int number)
{ 
  EEPROM.write(address, number >> 8);
  EEPROM.write(address + 1, number & 0xFF);
}
int readIntFromEEPROM(int address)
{
  return (EEPROM.read(address) << 8) + EEPROM.read(address + 1);
}
