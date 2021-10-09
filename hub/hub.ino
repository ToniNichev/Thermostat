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
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }
  Serial.println();
  Serial.println("######################");
  Serial.println("PROGRAM STARTED");
  Serial.println("######################");
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
  Serial.print("⌂ >>> ♁ :"); // request from the hub to the web server, passing thermostat's readings
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
  short int thermostatId = 0; // starting from first thermostat
  short int communicationChannel;
  int pos = 0;
  delay(200);

  if(serverData[1] == '#') {
    // #########################
    // add thermostat hub mode
    // #########################    
    if(serverData[2] == '#') {
      programMode = 0;
    }
    else {
      // set up hub to add thermostat mode
      RFCommunicatorSetup(0,1);
      // send thermostat ID to the thermostat
      Serial.print("0 | ⌂ >>> ⍑: ");
      Serial.println(serverData);
      RFCommunicatorSend(serverData);
      delay(1000);
      Serial.println("waiting for ⍑ response ...");
      char tempTwo[32] = "";
      RFCommunicatorListen(tempTwo, false);
      Serial.print("0 | ⍑ >>> ⌂ : ");
      Serial.println(tempTwo);
      strcat(thermostatsData, tempTwo);
      programMode = 0;
      delay(2000);
    }
  }
  else {
    // #########################
    // regular hub mode
    // #########################
    Serial.print("programMode: ");
    Serial.println(programMode);
    switch(programMode) {
      case 0:
        for(int i = 0; i < 100; i ++) {      
          if(serverData[i] == '\0') {
            break;
          }
          data[pos] = serverData[i];
          pos ++;
          if(serverData[i] == ']') {  
            // sending data to the thermostat
            communicationChannel = thermostatId + 1;

            RFCommunicatorSetup(communicationChannel, communicationChannel + 1);
            delay(2000);
            RFCommunicatorSend(data);  
            printToSerial(communicationChannel, data, true);

            
            // clear data
            memset(data, 0, 32);            
            delay(2000);

            // listen for data from the thermostat
            char temp[32] = "";         
            RFCommunicatorListen(temp, true);
            printToSerial(communicationChannel, temp, false);
            strcat(thermostatsData, temp);

            thermostatId ++;
            pos = 0;
            Serial.println();
          }
        }    
        break;
    }
  }
  Serial.println();
  Serial.println("delaying 2 sec before the next cycle ...");
  delay(2000);
}



void printToSerial(short int thermostatId, char data[32], bool hubToThermostat) {
  Serial.println();
  Serial.print(thermostatId);     
  Serial.print(" | ");
  if(hubToThermostat)
    Serial.print("⌂ >>> ⍑ ");
  else
    Serial.print("⍑ >>> ⌂ ");
  Serial.print(" : ");
  Serial.print(data);
}
