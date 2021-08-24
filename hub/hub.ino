#include <Ethernet.h>
#include "EthernetWebClient.h"
#include "RFCommunicator.h"

#define ethernetDomain "toni-develops.com"
#define ethernetUrl "GET /thermostat-services/get-data?data="
#define ethernetPort 8061

#define hubId "AXCS12"

char thermostatsData[100] = ""; 


void setHubId() {
  strcpy(thermostatsData, "[\"");
  strcat(thermostatsData, hubId);  
  strcat(thermostatsData, "\"]");  
}
      
void setup() {
  Serial.begin(9600);
  RFCommunicatorSetup();
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }
  Serial.println();
  Serial.println("PROGRAM STARTED");
  delay(200);
}

void loop() {
  char ethernetURL[150] = "";
  Serial.println();

  // construct the url and append thermostat id
  if(thermostatsData[0] != '[') {
    setHubId();
  }

  strcpy(ethernetURL, ethernetUrl);
  strcat(ethernetURL, thermostatsData);
  strcat(ethernetURL, " HTTP/1.1");

  Serial.println();
  Serial.print("⌂ >>> ♁ :"); // request from the hub to the web server
  Serial.print(ethernetURL);
  Serial.println();
    
  char serverData[100] = {0};  
  int len;       
  while(setupEthernetWebClient(ethernetURL, ethernetDomain, ethernetPort, serverData, len) == false) {
    ; // wait untill get server data
  }

  Serial.print("⌂ <<< ♁ :"); // response from the web server to the hub
  Serial.print(serverData);
  Serial.println();
  Serial.println();

  // add hub ID
  setHubId();
      
  char data[32] = "";
  short int thermostatId = 0;
  int pos = 0;
  for(int i = 0; i < 100; i ++) {
    if(serverData[i] == '\0')
      break;
    data[pos] = serverData[i];
    pos ++;
    if(serverData[i] == ']') {      
      RFCommunicatorSend(data, thermostatId);          
      Serial.print("⌂ >>> ⍑ (");
      Serial.print(thermostatId);
      Serial.print(") : ");
      Serial.print(data);
      Serial.println();

      // clear data
      memset(data, 0, 32);
      
      delay(700);

      int loops = 0;
      char temp[32] = "";
      while(RFCommunicatorListen(temp, thermostatId)!= true) { // each thermostat communicates on it's unique channel determin by thermostatId
        loops ++;
        delay(100);

        if(loops > 20) {
          Serial.print("⌂  ⃠ ⍑ (");
          Serial.print(thermostatId);
          Serial.print(") for more than ");
          Serial.print(loops);
          Serial.println(" cycles. Skipping ..."); 
          RFCommunicatorReset();
          break;
        }
      }
      if(loops < 20) {
        strcat(thermostatsData, temp);
        Serial.print("⌂ <<< ⍑ (");
        Serial.print(thermostatId);
        Serial.print(") : ");
        Serial.print(temp);
        Serial.println();
        Serial.println();          
      }
      thermostatId ++;
      pos = 0;
      loops = 0;
    }
  }

  Serial.println("delaying 1 sec before the next cycle ...");
  delay(1000);
}
