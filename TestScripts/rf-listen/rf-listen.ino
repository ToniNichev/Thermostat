#include "RFCommunicator.h"


void setup() {
  Serial.begin(9600);
  RFCommunicatorSetup();
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }
  Serial.println();
  Serial.println("PROGRAM STARTED");
}

void loop() {
  Serial.println("Listening ...");
  char tempTwo[32] = "";
  while(RFCommunicatorListen(tempTwo, 1)!= true) { // each thermostat communicates on it's unique channel determin by thermostatId
    delay(10);
  }
  Serial.print("response: ");
  Serial.println(tempTwo);
  delay(2000);
  Serial.println("loop ...");

}
