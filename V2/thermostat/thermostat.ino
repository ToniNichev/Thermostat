#include "RFCommunicator.h"
#include <EEPROM.h>
#define THERMOSTAT_EPROM_ADDRESS 3

short int mode = 0;
int q = 0;
short int thermostatId;
short int communicationChannel;

void setup() {
  Serial.begin(9600);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }
  Serial.println();
  Serial.println("PROGRAM STARTED");  


  writeIntIntoEEPROM(THERMOSTAT_EPROM_ADDRESS, 1);  // !!!  force to set up thermostat in ADD thermostat mode !!!!
  thermostatId = readIntFromEEPROM(THERMOSTAT_EPROM_ADDRESS);
  communicationChannel = (thermostatId * 2) + 1;
  
  RFCommunicatorSetup(communicationChannel + 1, communicationChannel);
}

void loop() {
  Serial.print("⌂ ... ⍑ ");
  char data[32];
  RFCommunicatorListen(data, false);
  printToSerial(communicationChannel, data, true); 
  
  q ++;
  char msg[32] = {0};
  constructMessage(communicationChannel, q, msg);
  RFCommunicatorSend(msg);

  Serial.println();
  Serial.println("delaying 2 sec.");
  Serial.println();
  delay(2000);
}


void constructMessage(short int communicationChannel, int payload, char msg[32]) {
  sprintf(msg, "(%d | ⍑ says: payload  %d)", thermostatId, payload);
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
