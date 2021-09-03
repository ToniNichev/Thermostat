#include <Ethernet.h>
#include "EthernetWebClient.h"
#include "RFCommunicator.h"

#define ethernetDomain "toni-develops.com"
#define ethernetUrl "GET /thermostat-services/get-data?data="
#define ethernetPort 8061

#define hubId "AXCS12"

#define addNewThermostatChannel 10
//#define communicationChannel 10

char thermostatsData[100] = ""; 
short int programMode = 0;

void setHubId() {
  strcpy(thermostatsData, "[\"");
  strcat(thermostatsData, hubId);  
  strcat(thermostatsData, "\"]");  
}
      
void setup() {
  Serial.begin(9600);
  RFCommunicatorSetup(0,1);
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
  delay(1000);

  if(serverData[1] == '#') { 
    programMode = 1;
    Serial.println("listening to the thermostat to add!");
    char tempTwo[32] = "";
    RFCommunicatorListen(tempTwo); // each thermostat communicates on it's unique channel determin by thermostatId
    Serial.print("⍑ @@@ replied : ");
    Serial.println(tempTwo);
    
    delay(5000);
  }

  Serial.println("!!!!!!!!!!!!!!!!!!");


  switch(programMode) {
    case 120:
    for(int i = 0; i < 100; i ++) {
      if(serverData[i] == '\0')
        break;
      data[pos] = serverData[i];
      pos ++;
      if(serverData[i] == ']') {      
        RFCommunicatorSend(data, thermostatId);    
        Serial.println("@@@@@@@@@@@@@@@@@@");      
        Serial.print("⌂ >>> ⍑ (");
        Serial.print(thermostatId);
        Serial.print(") : ");
        Serial.print(data);
        Serial.println();
  
        // clear data
        memset(data, 0, 32);
        
        delay(2000);
  
        int loops = 0;
        char temp[32] = "";
        short int loopsBeforeGiveUp = 1000;
        Serial.println("#################");
        RFCommunicatorListen(temp);

        thermostatId ++;
        pos = 0;
        loops = 0;
      }
    }    
    break;
  }
  
  Serial.println("delaying 2 sec before the next cycle ...");
  delay(2000);
}
