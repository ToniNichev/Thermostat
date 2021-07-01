#include <Ethernet.h>
#include "EthernetWebClient.h"
#include "RFCommunicator.h"

char serverData[100] = {0};
int len;
short int programMode = 0;


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
        programMode = 1;
      }
      break;
    case 1:
    char data[32] = "";
      for(int i = 0; i < 100; i ++) {
        data[i] = serverData[i];
        if(serverData[i] == ']') {
          RFCommunicatorSend(data);
          delay(1000);
          char temp[32] = "";
          while(RFCommunicatorListen(temp)!= true) {
            
          }
          Serial.print("temperature:");
          Serial.print(temp);
          Serial.println();
          break;
        }
      }
      programMode = 2;
    case 2:
      //RFCommunicatorSend(serverData);
      Serial.println("delaying 3 sec ...");
      delay(3000);
      programMode = 0;
      break;
  }
}
