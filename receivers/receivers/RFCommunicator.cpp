#include "RFCommunicator.h"

RF24 radio(9, 8);  // CE, CSN
const byte addresses[][6] = {"00001", "00002"};

void RFCommunicatorSetup(short int writeAddress, short int readAddress) {
  radio.begin();
  radio.openWritingPipe(addresses[writeAddress]); // 00002
  radio.openReadingPipe(1, addresses[readAddress]); // 00001
  radio.setPALevel(RF24_PA_MIN);
} 

void RFCommunicatorSend(char sendText[], short int channel) {
  const char text[32] = {0};
  strcpy(text,sendText);
  radio.stopListening();
  radio.write(&text, sizeof(text));
}

void RFCommunicatorListen(char data[]) {  
  radio.startListening();
  while(!radio.available()) {}
  char text[32] = "";
  radio.read(&text, sizeof(text));
  strcpy(data, text);
}
