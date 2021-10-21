#include "RFCommunicator.h"
#define RECEIVE_TIMEOUT_AFTER 200

RF24 radio(9, 8);  // CE, CSN
const byte addresses[][6] = {"00001", "00010", "00020", "00025", "00030", "00035"};
short int listenRepeats;

void RFCommunicatorSetup(short int writeAddress, short int readAddress) {
  radio.begin();
  radio.openWritingPipe(addresses[writeAddress]); 
  radio.openReadingPipe(1, addresses[readAddress]); // 00001
  radio.setPALevel(RF24_PA_MAX);
} 

void RFCommunicatorSend(char sendText[]) {
  radio.powerUp();
  delay(100);
  const char text[32] = {0};
  strcpy(text,sendText);
  radio.stopListening();
  delay(100);
  radio.write(&text, sizeof(text));
  radio.powerDown();
}

void RFCommunicatorListen(char data[], bool withTimeout) {  
  radio.powerUp();
  delay(100);
  radio.startListening();
  delay(100);
  listenRepeats = 0;
  while(!radio.available()) {
    if(withTimeout) {
      if(listenRepeats > RECEIVE_TIMEOUT_AFTER) {
        Serial.print("[RFCommunicator]: didn't receive response for more than ");
        Serial.print(listenRepeats);
        Serial.println(" cycles. ! Aborting !!!");
        break;
      }
      listenRepeats ++;    
    }
    delay(10);
  }
  char text[32] = "";
  radio.read(&text, sizeof(text));
  strcpy(data, text);
  radio.stopListening();
  radio.powerDown();
}
