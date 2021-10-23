/*
* Arduino Wireless Communication Tutorial
*     Example 1 - Transmitter Code
*                
* by Dejan Nedelkovski, www.HowToMechatronics.com
* 
* Library: TMRh20/RF24, https://github.com/tmrh20/RF24/
*/
#include <SPI.h>
#include <nRF24L01.h>
#include <RF24.h>
RF24 radio(9, 8); // CE, CSN
const byte addresses[][6] = {"00001", "00010", "00020", "00025", "00030", "00035"};

int q = 0;
int id = 0;
int chanel = (id * 2) + 1;
void setup() {
  Serial.begin(9600);
  Serial.println("Program starting ...");
  
  radio.begin();
  radio.openWritingPipe(addresses[chanel + 1]);
  radio.openReadingPipe(0, addresses[chanel]);
  radio.setPALevel(RF24_PA_MIN);  
}
void loop() {

  // SEND
  radio.stopListening();
  const char text[32];
  sprintf(text, "hello world %d", q);
  radio.write(&text, sizeof(text));
  Serial.println("Sending ...");
  delay(500);

  // RECEIVE
  radio.startListening();
  Serial.println("Listening");
  int listenRepeats = 0;
  while(!radio.available()) {    
  }
  char textTwo[32] = "";
  radio.read(&textTwo, sizeof(textTwo));
  Serial.println(textTwo);
  //radio.stopListening();

  
  delay(1000);
  q ++;
  //id = id > 2 ? 0 : id;
}
