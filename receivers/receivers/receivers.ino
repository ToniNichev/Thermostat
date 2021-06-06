#include <SPI.h>
#include <nRF24L01.h>
#include <RF24.h>
#include <DHT.h>

//create an RF24 object
RF24 radio(9, 8);  // CE, CSN

//address through which two modules communicate.
const byte address[6] = "00001";

//Constants
#define DHTPIN 4     // what pin we're connected to
#define DHTTYPE DHT22   // DHT 22  (AM2302)
DHT dht(DHTPIN, DHTTYPE); //// Initialize DHT sensor for normal 16mhz Arduino

//Variables
int chk;
float hum;  //Stores humidity value
float temp; //Stores temperature value

void setup()
{   
  while (!Serial);
    Serial.begin(9600);

  dht.begin();    

  pinMode(2, OUTPUT);    

  radio.begin();  
  //set the address
  radio.openReadingPipe(0, address);  
  //Set module as receiver
  radio.startListening();
  Serial.println("Setup complete!");
}

int mode = 0;

void loop()
{
  if(mode == 0) {

    hum = dht.readHumidity();
    temp= dht.readTemperature();    
    char msg[] = "TEST123456789";
    char t[] = "     ";
    dtostrf(hum, 4, 2, t); 
    msg[0] = t[0];
    msg[1] = t[1];
    msg[2] = t[2];
    msg[3] = t[3];
    msg[4] = t[4];
    msg[5] = '|';
    Serial.println(msg);
  //Read the data if available in buffer    
    Serial.println("mode 0");
    if (radio.available())
    {
      char text[32] = {0};
      radio.read(&text, sizeof(text));
      Serial.println("Receiving data ...");
      Serial.println(text[1]);
  
      if(text[0] == '1') {
        digitalWrite(2, HIGH);
      }
      else {
        digitalWrite(2, LOW);      
      }
      mode = 1;      
      delay(2000);
    }
  }else if(mode == 1) {
    //Set module as transmitter
    radio.stopListening(); 
    //set the address
    radio.openWritingPipe(address);       
    Serial.println("Switching to sending data ...");
    delay(5000);
    mode = 2;       
  }else if(mode == 2) {
        hum = dht.readHumidity();
        temp= dht.readTemperature();


        hum = dht.readHumidity();
        temp= dht.readTemperature();    
        char msg[] = "TEST123456789";
        char t[] = "     ";
        dtostrf(hum, 4, 2, t); 
        msg[0] = t[0];
        msg[1] = t[1];
        msg[2] = t[2];
        msg[3] = t[3];
        msg[4] = t[4];
        msg[5] = '|';
        Serial.println(msg);

        radio.write(&msg, sizeof(msg));
        //const char text[] = "Test text ...";      
        //radio.write(&text, sizeof(text));    
        Serial.println("Sending data ...");
        //set the address
        //set the address
        radio.openReadingPipe(0, address);  
        //Set module as receiver
        radio.startListening();
        mode = 0;
  }

  /*
  //Read data and store it to variables hum and temp
  hum = dht.readHumidity();
  temp= dht.readTemperature();
  //Print temp and humidity values to serial monitor
  Serial.print("Humidity: ");
  Serial.print(hum);
  Serial.print(" %, Temp: ");
  Serial.print(temp);
  Serial.println(" Celsius");  
  */
  delay(200);
}
