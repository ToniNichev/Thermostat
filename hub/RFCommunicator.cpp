#include "RFCommunicator.h"

RF24 RFCommunicatorRadio(9, 8);  // CE, CSN
//address through which two modules communicate.
const byte RFCommunicatorAddress[6] = "00001";
const byte RFCommunicatorAddressNewDevice[6] = "00002";
short int RFCommunicatorMode = 0;

void RFCommunicatorSetup() {
  RFCommunicatorRadio.begin();
}

bool RFCommunicatorListen(char data[]) {
  if(RFCommunicatorMode == 0) {
    //RFCommunicatorRadio.begin();
    RFCommunicatorRadio.openReadingPipe(0, RFCommunicatorAddress);
    RFCommunicatorRadio.startListening();   
    Serial.println("Listening ...");
    RFCommunicatorMode = 1; // listen
    return false;
  }
  else {
    if (RFCommunicatorRadio.available())
    {
      Serial.println("Data coming ...");
      char text[32] = {0};
      RFCommunicatorRadio.read(&text, sizeof(text));
      strcpy(data, text);
      RFCommunicatorMode = 0;
      return true;
     }
  }
}

void RFCommunicatorSend(char sendText[]) {
  //RFCommunicatorRadio.begin();
  RFCommunicatorRadio.stopListening();  
  RFCommunicatorRadio.openWritingPipe(RFCommunicatorAddress);
  //delay(100);

  const char text[32] = {0};
  strcpy(text,sendText);
  RFCommunicatorRadio.write(&text, sizeof(text));
}
