#include <Ethernet.h>
#include "RFCommunicator.h"

char serverData[100] = {0};
int len;
short int programMode = 0;


void setup() {
  Serial.begin(9600);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }  
  Serial.println("================== PROGRAM STARTED ======================");
}

void loop() {
  switch(programMode) {
    case 0:
      if(RFCommunicatorListen(serverData)) {
        Serial.println(serverData);
        programMode = 1;        
      }
      delay(100);
      break;
    case 1:    
      break;
  }
}
