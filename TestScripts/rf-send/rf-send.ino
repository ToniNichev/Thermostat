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
  
  RFCommunicatorSetup(0, 1);

}

void loop() {

  char msg[32] = "[sender] sending data:";
  char arr[10];
  sprintf(arr, "%d", q);
  strcat(msg, arr);
  q ++;
  RFCommunicatorSend(msg, 1);
  Serial.println("-=== Sending ===--");
  Serial.println();
  
  Serial.println("-=== Listening ===--");
  char data[32];
  RFCommunicatorListen(data);
  Serial.println(data);
  
  Serial.println("delaying 2 sec");
  delay(2000);
}
