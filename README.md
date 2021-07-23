# Thermostat
A Smart Thermostat project

# PTAC wiring
    *   setting up PTAC in remote terminal mode
        - press and hold +/- then press [off] twise
        - press heat to go to C1
        - press +/- to go to L1 (or L5 didn't remember. I have to test again ...)

    https://www.youtube.com/watch?v=bffd5M8eKCk

    C   |   R    |    GL    |   W2      |    Y/W1    |    B    |    GH     |
---------------------------------------------------------------------------
    +   |  GND   |  fan low | Electric/ | compressor |         |  fan high |
        |        |          | Auxiliary |   cool     |         |           | 
        |        |          |   heat    |            |         |           |
--------|--------|----------|-----------|------------|---------|-----------|
    +   |  GND   |   P7     |    P3     |     P5     |         |    P6     |
----------------------------------------------------------------------------


# Relay schema
  COOL  | HOT |  FAN LOW | FAN HIGH |
-------------------------------------
   IN3  | IN4 |    IN1   |    IN2   |
# Web App

http://localhost:8081/home?data=["AXCS12"]      

* Services

    * Get Full Data
        http://toni-develops.com:8061//thermostat-services/get-full-data

    * Get Data
        - called from the hub to send (id, curentHumidity, curentTemperature, empty)
        - web server response (id, requiredTemperature, ThermostatMode, fanMode ):  [0,24,1,0][1,31,1,0]
        - thermostatMode: 0 - off, 1 - cool, 2 - heat
        - fanMode: 0 - auto, 1 - low speed, 2 - high speed
        http://toni-develops.com:8061/thermostat-services/get-data?data=["AXCS12"][0,52.80,28.63,0][1,51.90,28.38,0]

    * Set desired temperature
        http://localhost:8081/thermostat-services/set-desired-temperature?data=["AXCS12"][0,21.0]




================================================
Reset PTAC security code

1. Switch off AC
2. Turn [MASTER SWITCH] off
3. Press and hold [FAN SPEED] button.
4. While keep [FAN SPEED] button down, turn on the [MASTER SWITCH]
5. Count slowly to at least 10
6. While fan button is down, press and release [COOL] button.
7. Release the fan button.
8. Wait a bit and try to enter REMOTE mode.