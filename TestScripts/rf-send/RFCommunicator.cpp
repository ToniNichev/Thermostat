#include "RFCommunicator.h"

RF24 radio(9, 8);  // CE, CSN
//const byte RFCommunicatorAddress[][6] = {"00001", "00002", "00003", "00004", "00005", "00006", "00007", "00008", "00009"};
const byte addresses[][6] = {"00001", "00002"};

void RFCommunicatorSetup() {
  radio.begin();
  radio.openWritingPipe(addresses[1]); // 00002
  radio.openReadingPipe(1, addresses[0]); // 00001
  radio.setPALevel(RF24_PA_MIN);
} 

void RFCommunicatorSend(char sendText[], short int channel) {
  radio.stopListening();
  const char text[32] = {0};
  strcpy(text,sendText);
  radio.write(&text, sizeof(text));
}

void RFCommunicatorListen() {  
  radio.startListening();
  while(!radio.available()) {}
  char text[32] = "";
  radio.read(&text, sizeof(text));
  Serial.println(text);
}
