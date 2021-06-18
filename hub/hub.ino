#include <SPI.h>
#include <Ethernet.h>
#include <nRF24L01.h>
#include <RF24.h>
#include "string_to_float.h"

int startWritingData = 0;
bool BodyStarted = false;


//create an RF24 object``
RF24 radio(9, 8);  // CE, CSN
//address through which two modules communicate.
const byte address[6] = "00001";

/*
 * continuosly pooling for data from the server
 */
 
// Enter a MAC address for your controller below.
// Newer Ethernet shields have a MAC address printed on a sticker on the shield
byte mac[] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED };

// if you don't want to use DNS (and reduce your sketch size)
// use the numeric IP instead of the name for the server:
//IPAddress server(74,125,232,128);  // numeric IP for Google (no DNS)
//char server[] = "www.toni-develops.com";    // name address for Google (using DNS)

// Set the static IP address to use if the DHCP fails to assign
//IPAddress ip(192, 168, 0, 177);
//IPAddress myDns(192, 168, 0, 1);

// Initialize the Ethernet client library
// with the IP address and port of the server
// that you want to connect to (port 80 is default for HTTP):
EthernetClient client;
String serverBodyResponse = "";
String tempServerResponse = "";
char serverName[] = "toni-develops.com";

struct ControllerModules {
  int id = 0;
  float humidity = 0;
  float curentTemp = 0;
  float desiredTemp = 0;
};

ControllerModules controllerModules[10];


void setup() {
  pinMode(2, OUTPUT);
  pinMode(3, OUTPUT);

  radio.begin();
  //set the address
  radio.openWritingPipe(address);
  //Set module as transmitter
  radio.stopListening();
 
  // Open serial communications and wait for port to open:
  Serial.begin(9600);
  // attempt a DHCP connection:
  if (!Ethernet.begin(mac)) {
    // if DHCP fails, start with a hard-coded address:
    //Ethernet.begin(mac, ip);
  }
  requestDataFromServer();
}


/**
 * Main Loop
 */

int mode = 0;

void loop() {
 

  if(mode == 0) {
    // Send mode
    if (client.connected()) {
      fetchServerData();
    }
    else {  
      float *serverResponse = parseToValues(serverBodyResponse);      
      Serial.println();
      Serial.println("client disconnected from server. The response string is:");
      Serial.println("================================================");
      Serial.println(serverResponse[0]);
      Serial.println(serverResponse[1]);
      Serial.println(serverResponse[2]);
      Serial.println("================================================");  
      
  
      if(serverBodyResponse == "1") {
        digitalWrite(2, HIGH); 
        const char text[] = "1";      
        radio.write(&text, sizeof(text));
      }
      else {
        digitalWrite(2, LOW); 
        const char text[] = "0";      
        radio.write(&text, sizeof(text));      
      }

      requestDataFromServer();        
          
      // clear params
      serverBodyResponse = "";  
      tempServerResponse = "";
      BodyStarted = false;
  
      mode = 1; // switch to receiving mode       
    }
  }
  else if(mode == 1) {
    //Serial.println("Prepare for Receiving mode ... ");
    // prepare for receiving mode 
    //Set module as receiver
    radio.startListening();    
    radio.openReadingPipe(0, address);
    mode = 2;
    delay(500);
  }
  else if(mode == 2) {
    // receive data from controlers
    //Read the data if available in buffer
    if (radio.available())
    {
      //Serial.println("Receiving mode Radio available ... ");      
      char text[32] = {0};
      radio.read(&text, sizeof(text));

      float *thermostatData = parseToValues(text);
      short int id = thermostatData[0];
      float humidity = thermostatData[1];
      float curentTemp = thermostatData[2];
      controllerModules[id].id = id;
      controllerModules[id].humidity = humidity;
      controllerModules[id].curentTemp = curentTemp;
      Serial.println("Received text :");
      Serial.println(controllerModules[1].humidity);
      Serial.println();
      

      // set it back to transmitting mode
      radio.openWritingPipe(address);
      //Set module as transmitter
      radio.stopListening();      
      mode = 0;
    }
    
    
  }
}


/**
 * HELPER METHODS
 * 
 */


void requestDataFromServer() {
  // connect to the web server
  String request = "[";
  for(short int i = 1; i < 10; i ++) {
    Serial.println("controllerModules >>>>");
    Serial.println(controllerModules[1].humidity);
    Serial.println();
    if(controllerModules[i].id == 0)
      break;
    String singleModuleQuery = String(controllerModules[i].id) + "," + String(controllerModules[i].humidity) + ',' + controllerModules[i].curentTemp;
    request += singleModuleQuery;    
  }

   request += "]";

    Serial.println("!@!@!@");
    Serial.println(request);
    Serial.println();
  if (client.connect(serverName, 8061)) {
    //Serial.println("making HTTP request...");
    client.println("GET /services/data?data=" + request + " HTTP/1.1");
    client.println("HOST: toni-develops.com");
    client.println();
  }
}

void fetchServerData() {
    if (client.available()) {
      // read incoming bytes:
      char inChar = client.read();
      tempServerResponse += inChar;
      char tmp[] = "test";
      int l = tempServerResponse.length();
      if(BodyStarted == false) {
        if(inChar == '$' && tempServerResponse[l - 2] == '@' && tempServerResponse[l - 3] == '#') {
          BodyStarted = true;       
        }
      }
      else {
        serverBodyResponse += inChar;
      }
    }  
}
