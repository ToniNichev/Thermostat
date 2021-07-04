#include <Ethernet.h>
#include "EthernetWebClient.h"
#include "RFCommunicator.h"

char serverData[100] = {0};
int len;
short int programMode = 0;
int loops = 0;
char thermostatsData[100] = "";
char ethernetURL[100] = "";      

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
      strcpy(ethernetURL, "GET /thermostat-services/get-data?data=");
      strcat(ethernetURL, thermostatsData);
      strcat(ethernetURL, " HTTP/1.1");
      Serial.print("url:");
      Serial.print(ethernetURL);
      Serial.println();  
      programMode = 1;    
    case 1:    
      if( setupEthernetWebClient("GET /thermostat-services/get-data?data=[1,2,4] HTTP/1.1", "toni-develops.com", 8061, serverData, len) == true) {
        Serial.print("server data:");
        Serial.print(serverData);
        Serial.println();
        Serial.println();
        Serial.println();
        programMode = 2;
      }
      ethernetURL[120] = "";
      thermostatsData[0] = '\0';
      break;
    case 2:
        Serial.print("programMode:");
        Serial.print(programMode);
        Serial.println(); 
        Serial.println();    
      char data[32] = "";
      short int thermostatId = 0;
      int pos = 0;
      for(int i = 0; i < 50; i ++) {
        if(serverData[i] == '\0')
          break;
        data[pos] = serverData[i];
        pos ++;
        if(serverData[i] == ']') {
          RFCommunicatorSend(data, thermostatId);
          
          Serial.print(">>>>>>>>>> data : ");
          Serial.print(data);
          Serial.println();
          Serial.println();

          delay(1000);
          char temp[32] = "";
          //Serial.print("waiting for thermostat data...");
          Serial.println();
          while(RFCommunicatorListen(temp, thermostatId)!= true) {
            loops ++;
            //Serial.println(loops);
          }
          strcat(thermostatsData, temp);
          Serial.print("thermostat ");
          Serial.print(thermostatId);
          Serial.print(" data: ");
          Serial.print(temp);
          Serial.println();
          Serial.println();          
          thermostatId ++;
          pos = 0;
          i += 1;
          //break;
        }
      }
      programMode = 3;
    case 3:
      //RFCommunicatorSend(serverData);
      Serial.println("delaying 3 sec ...");
      delay(3000);
      programMode = 0;
      loops = 0;
      ethernetURL[0] = '\0';
  }
}
