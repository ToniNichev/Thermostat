#ifndef RFCOMMUNICATOR_H
#define RFCOMMUNICATOR_H
#include <Arduino.h>
#include <nRF24L01.h>
#include <RF24.h>


void RFCommunicatorSetup();
void RFCommunicatorReset();
bool RFCommunicatorListen(char data[], short int channel);
void RFCommunicatorSend(char sendText[], short int channel);


#endif
