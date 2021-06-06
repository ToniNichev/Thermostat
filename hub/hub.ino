#include <SPI.h>
#include <Ethernet.h>
#include <nRF24L01.h>
#include <RF24.h>

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

int startWritingData = 0;


void requestDataFromServer() {
    // attempt to connect, and wait a millisecond:
  Serial.println("connecting to server...");
  if (client.connect(serverName, 8061)) {
    Serial.println("making HTTP request...");
    // make HTTP GET request to twitter:
    //client.println("GET /1/statuses/user_timeline.xml?screen_name=RandyMcTester&count=1 HTTP/1.1");
    //client.println("GET /external-files/thermostat-test/data.txt HTTP/1.1");

    client.println("GET /services/data HTTP/1.1");
    client.println("HOST: toni-develops.com");
    client.println();
  }
}


bool BodyStarted = false;


void fetchServerData() {
    if (client.available()) {
      // read incoming bytes:
      char inChar = client.read();
      tempServerResponse += inChar;
      char tmp[] = "test";
      int l = tempServerResponse.length();
      //Serial.print(">>>>");
      //Serial.print(tempServerResponse);
      //Serial.println();
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



/**
 * Main Loop
 */

struct controllerModules {
  int id;
  int mode; // 0 - off, 1 - fan , 2 - 
  int data1;
  int data2;
};

void loop() {

  
  if (client.connected()) {
    fetchServerData();
  }
  else {  
    Serial.println();
    Serial.println("client disconnected. The response string is:");
    Serial.println("================================================");
    Serial.println(serverBodyResponse[0]);
    Serial.println("================================================");  
    requestDataFromServer();  

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
    
    // clear params
    serverBodyResponse = "";  
    tempServerResponse = "";
    BodyStarted = false;
    delay(10);
  }
}
