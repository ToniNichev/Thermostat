#include <Ethernet.h>
#include "EthernetWebClient.h"
#include "RFCommunicator.h"

char serverData[100] = {0};
int len;
short int programMode = 0;
int loops = 0;
char thermostatsData[100] = "";      

void setup() {
  Serial.begin(9600);
  RFCommunicatorSetup();
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }
  Serial.println();
  Serial.println();  
  Serial.println("================== PROGRAM STARTED ======================");
  delay(200);
}

void loop() {
  char ethernetURL[100] = "";

  Serial.println(" -------------------------------------------------------- ");
  Serial.println();

  strcpy(ethernetURL, "GET /thermostat-services/get-data?data=");
  strcat(ethernetURL, thermostatsData);
  strcat(ethernetURL, " HTTP/1.1");
  Serial.print("url:");
  Serial.print(ethernetURL);
  Serial.println(); 
         
  while(setupEthernetWebClient(ethernetURL, "toni-develops.com", 8061, serverData, len) == false) {
    ; // wait untill get server data
  }
  Serial.print("server data:");
  Serial.print(serverData);
  Serial.println();
  programMode = 1;
  thermostatsData[0] = '\0';
      
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

  Serial.println("delaying 3 sec before the next cycle ...");
  delay(3000);
}
