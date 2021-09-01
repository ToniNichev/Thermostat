#include "RFCommunicator.h"

RF24 RFCommunicatorRadio(9, 8);  // CE, CSN
//address through which two modules communicate.
const byte RFCommunicatorAddress[][6] = {"00001", "00002", "00003", "00004", "00005", "00006", "00007", "00008", "00009", "00010", "00011"};
short int RFCommunicatorMode = 0;

void RFCommunicatorSetup() {
  RFCommunicatorRadio.begin();
}

bool RFCommunicatorListen(char data[], short int channel) {
  //Serial.print("RFCommunicatorAddress[channel] :");
  //Serial.println(RFCommunicatorAddress[channel][3]);
  if(RFCommunicatorMode == 0) {
    //RFCommunicatorRadio.begin();
    RFCommunicatorRadio.openReadingPipe(0, RFCommunicatorAddress[channel]);
    RFCommunicatorRadio.startListening();   
    //Serial.println("Listening ...");
    RFCommunicatorMode = 1; // listen
    return false;
  }
  else {
    if (RFCommunicatorRadio.available())
    {
      //Serial.println("Data coming ...");
      char text[32] = {0};
      RFCommunicatorRadio.read(&text, sizeof(text));
      strcpy(data, text);
      RFCommunicatorMode = 0;
      return true;
     }
  }
}

void RFCommunicatorSend(char sendText[], short int channel) {
  //RFCommunicatorRadio.begin();
  RFCommunicatorRadio.stopListening();  
  RFCommunicatorRadio.openWritingPipe(RFCommunicatorAddress[channel]);
  //delay(100);

  const char text[32] = {0};
  strcpy(text,sendText);
  RFCommunicatorRadio.write(&text, sizeof(text));
}
