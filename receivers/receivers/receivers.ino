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
}

int mode = 0;

void loop()
{
  //Read the data if available in buffer
  if (radio.available())
  {
    char text[32] = {0};
    radio.read(&text, sizeof(text));
    Serial.println(text[1]);
    if(mode != text[0]) {
      if(text[0] == '1') {
        digitalWrite(2, HIGH);
      }
      else {
        digitalWrite(2, LOW);      
      }
      mode = text[0];
    }
  }

  //Read data and store it to variables hum and temp
  hum = dht.readHumidity();
  temp= dht.readTemperature();
  //Print temp and humidity values to serial monitor
  Serial.print("Humidity: ");
  Serial.print(hum);
  Serial.print(" %, Temp: ");
  Serial.print(temp);
  Serial.println(" Celsius");  
  delay(200);
}
