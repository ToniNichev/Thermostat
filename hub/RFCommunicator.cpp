#include "RFCommunicator.h"

RF24 RFCommunicatorRadio(9, 8);  // CE, CSN
//address through which two modules communicate.
const byte RFCommunicatorAddress[6] = "00001";
const byte RFCommunicatorAddressNewDevice[6] = "00002";
short int RFCommunicatorMode = 0;

void RFCommunicatorListen(char data[]) {
  if(RFCommunicatorMode == 0) {
    RFCommunicatorRadio.begin();
    RFCommunicatorRadio.openReadingPipe(0, RFCommunicatorAddress);
    RFCommunicatorRadio.startListening();   
    Serial.println("Listening ...");
    RFCommunicatorMode = 1; // listen
  }
  else {
    if (RFCommunicatorRadio.available())
    {
      char text[100] = {0};
      RFCommunicatorRadio.read(&text, sizeof(text));
      strcpy(data, text);
      return true;
     }
  }
}

void RFCommunicatorSend(char sendText[]) {
  RFCommunicatorRadio.begin();
  RFCommunicatorRadio.stopListening();  
  RFCommunicatorRadio.openWritingPipe(RFCommunicatorAddress);
  //delay(100);

  const char text[150] = {0};
  strcpy(text,sendText);
  RFCommunicatorRadio.write(&text, sizeof(text));
}
