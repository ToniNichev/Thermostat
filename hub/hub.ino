#include <Ethernet.h>
#include "EthernetWebClient.h"
#include "RFCommunicator.h"

char serverData[100] = {0};
int len;
short int programMode = 0;
int loops = 0;


void setup() {
  Serial.begin(9600);
  RFCommunicatorSetup();
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }  
  Serial.println("================== PROGRAM STARTED ======================");
  delay(200);
}

void loop() {
  switch(programMode) {
    case 0:
      if( setupEthernetWebClient("GET /thermostat-services/get-data?data=[] HTTP/1.1", "toni-develops.com", 8061, serverData, len) == true) {
        Serial.print("server data:");
        Serial.print(serverData);
        Serial.println();
        Serial.println();
        programMode = 1;
      }
      break;
    case 1:
      char data[32] = "";
      short int thermostatId = 0;
      int pos = 0;
      for(int i = 0; i < 100; i ++) {
        data[pos] = serverData[i];
        pos ++;
        if(serverData[i] == ']') {
          RFCommunicatorSend(data, thermostatId);
          delay(1000);
          char temp[32] = "";
          Serial.print("waiting for thermostat data...");
          Serial.println();
          while(RFCommunicatorListen(temp, thermostatId)!= true) {
            loops ++;
            Serial.println(loops);
          }
          Serial.print("thermostat data: ");
          Serial.print(temp);
          Serial.println();
          Serial.println();          
          thermostatId ++;
          pos = 0;
          break;
        }
      }
      programMode = 2;
    case 2:
      //RFCommunicatorSend(serverData);
      Serial.println("delaying 3 sec ...");
      delay(3000);
      programMode = 0;
      loops = 0;
      break;
  }
}
