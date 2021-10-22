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
const byte addresses[][6] = {"00001", "00010"};

int q = 0;
int id = 0;
void setup() {
  Serial.begin(9600);
  Serial.println("Program starting ...");
  
  radio.begin();
  radio.openWritingPipe(addresses[id]);
  radio.openReadingPipe(0, addresses[id]);
  radio.setPALevel(RF24_PA_MIN);  
}
void loop() {


  radio.startListening();
  if (radio.available()) {
    char text[32] = "";
    radio.read(&text, sizeof(text));
    Serial.println(text);
  }

  
  radio.stopListening();
  const char text[32];
  sprintf(text, "thermostat$d - %d", id, q);
  radio.write(&text, sizeof(text));
  Serial.println(".");


  
  delay(1000);
  q ++;
}
