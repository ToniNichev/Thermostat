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
char serverName[] = "toni-develops.com";

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
String serverBodyResponse = "                                                                                                                                                        ";
String tempServerResponse = "";


struct ControllerModules {
  int id = 0;
  int mode = 0;  
  String ThermostatName = "";
  String group = "";
  float humidity = 0;
  float curentTemp = 0;
  float requiredTemp = 0;
};

ControllerModules controllerModules[10];


void setup() {
  pinMode(2, OUTPUT);
  pinMode(3, OUTPUT);

  // set the hub as transmetter
  radio.begin();
  radio.openWritingPipe(address);
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
 * 
 * 
 * 
 * 
 * Main Loop
 * 
 * 
 * 
 */

int mode = 0;

void loop() {
 

  if(mode == 0) {

      //String test = "[1,23,34.43]";
      //float *thermostatData = parseToValues(test);
      //Serial.println(thermostatData[2]);
      
    // Send mode
    if (client.connected()) {
      fetchServerData();
    }
    else {  
      //float *serverResponse = parseToValues(serverBodyResponse);      
      
      Serial.println();
      Serial.println("==================================================");      
      Serial.println("HTTP client disconnected. `serverBodyResponse` is:");
      Serial.println("==================================================");
      Serial.println(serverBodyResponse);
      Serial.println("==================== END ==============================");  
      
  
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
    // prepare for receiving mode 
    //Set module as receiver
        
    Serial.println("Prepare for Receiving data from thermostats ... ");
    radio.startListening();    
    radio.openReadingPipe(0, address);
    mode = 2;
  }
  else if(mode == 2) {
    // receive data from controlers
    // Read the data if available in buffer
    

    if (radio.available())
    { 
      char text[128] = {0};
      radio.read(&text, sizeof(text));

      // Hub receives data from single thermostat
      String test = "[1]";
      float *thermostatDataa = parseToValues(test);

      Serial.println("Received text >>> :");
      Serial.println("--------- text -----------");
      Serial.println(text);
      Serial.println("--------------------");
      Serial.println( thermostatDataa[1], 4 );
      Serial.println("--------------------");
      Serial.println();      

      /*
      short int id = (int)thermostatData[0];
      short int controlerMode = (int)thermostatData[1];
      float humidity = (float)thermostatData[2];
      float curentTemp = (float)thermostatData[3];
      //String ThermostatName = (String)thermostatData[3];
      
      controllerModules[id].id = id;
      controllerModules[id].humidity = humidity;
      controllerModules[id].curentTemp = curentTemp;
      controllerModules[id].mode = controlerMode;
      */
      

      

      // set it back to transmitting mode
      radio.openWritingPipe(address);
      //Set module as transmitter
      radio.stopListening();      
      mode = 0;
      delay(300);
    }
  }
}


/**
 * ################################################
 * HELPER METHODS
 * ################################################
 */

/**
 * Requests data from web server
 */
void requestDataFromServer() {
  // connect to the web server

  Serial.println("############ requestDataFromServer ##########");
  String request = "[";
  for(short int i = 0; i < 2; i ++) {
    /*
    Serial.println("controllerModules >>>>");
    Serial.println(controllerModules[i].id);
    Serial.println(controllerModules[i].humidity);
    Serial.println(controllerModules[i].ThermostatName);
    Serial.println("------------");
    Serial.println(i);
    Serial.println("------------");
    */
    //if(controllerModules[i].ThermostatName == "")
    //  break;
    String singleModuleQuery = String(controllerModules[i].id) + "," + String(controllerModules[i].mode) + "," + String(controllerModules[i].humidity) + ',' + controllerModules[i].curentTemp;

    /*
    Serial.println("######### requestDataFromServer ############");
    Serial.println("# controllerModules #");
    Serial.println(controllerModules[i].id);
    Serial.println("#############################################");
    Serial.println();
    */
        
    request += singleModuleQuery;    
  }
  
  request = "[]";

    
  Serial.println("############################");
  Serial.println("# request data from server #");
  Serial.println(request); 
  Serial.println();
    
    
  if (client.connect(serverName, 8061)) {
    Serial.println("making HTTP request...");
    //Serial.println(request);
    client.println("GET /thermostat-services/get-data?data=[] HTTP/1.1");
    client.println("HOST: toni-develops.com");
    //client.println("Connection: close");
    client.println();
  }
}

/**
 * fetching data from web server
 */
void fetchServerData() {
    if (client.available()) {
      // read incoming bytes:
      char inChar = client.read();
      serverBodyResponse += inChar;
      /*
      
      tempServerResponse += inChar;
      BodyStarted = true;
      
      int l = tempServerResponse.length();
      if(BodyStarted == false) {
        if(inChar == '$' && tempServerResponse[l - 2] == '@' && tempServerResponse[l - 3] == '#') {
          BodyStarted = true;       
        }
      }
      else {
        serverBodyResponse += inChar;
        //Serial.println(inChar);
      }
      */
      
    }  
}
