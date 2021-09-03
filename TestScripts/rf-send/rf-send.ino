#include "RFCommunicator.h"
short int mode = 0;
int q = 10;

void setup() {
  Serial.begin(9600);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }
  Serial.println();
  Serial.println("PROGRAM STARTED");
  
  RFCommunicatorSetup();

}

void loop() {

  char msg[32] = "[Listener] sending data:";
  char arr[10];
  sprintf(arr, "%d", q);
  strcat(msg, arr);
  q ++;
  RFCommunicatorSend(msg, 1);
  Serial.println("-=== Sending ===--");
  Serial.println(msg);
  Serial.println();
  delay(3000);

  /*
  Serial.println("-=== Listening ===--");
  RFCommunicatorListen();
  */

 
}
