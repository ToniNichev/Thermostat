#include "RFCommunicator.h"

int q = 0;
void setup() {
  Serial.begin(9600);  
  RFCommunicatorSetup();
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }  
  Serial.println("PROGRAM STARTED");


}

void loop() {
  char msgToServer[32]="";
  char arr[10];
  q ++;
  sprintf( arr, "%d", q ); 

  char test[] = "sending data :";
  strcpy(msgToServer,test);    
  strcat(msgToServer, arr);  
  
  //Serial.print("SENDING: ");
  Serial.println(msgToServer);
  
  RFCommunicatorSend(msgToServer, 0);
  delay(8000);
}
