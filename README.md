# Thermostat
This is a Smart Thermostat project

# PTAC wiring
    *   setting up PTAC in remote terminal mode
        - press and hold +/- then press [off] twise
        - press heat to go to C1
        - press +/- to go to L1 

    https://www.youtube.com/watch?v=bffd5M8eKCk

    C   |   R    |    GL    |   W2      |    Y/W1    |    B    |    GH     |
---------------------------------------------------------------------------
    +   |  GND   |  fan low | Electric/ | compressor |         |  fan high |
        |        |          | Auxiliary |   cool     |         |           | 
        |        |          |   heat    |            |         |           |


# Web App

http://localhost:8081/home        

* Services

    * Get Full Data
        http://toni-develops.com:8061//thermostat-services/get-full-data

    * Get Data
        - called from the hub to send (id, curentHumidity, curentTemperature, empty)
        - web server response (id, requiredTemperature, ThermostatMode, fanMode ):  [0,24,1][1,31,1]
        - thermostatMode: 0 - off, 1 - cool, 2 - heat
        - fanMode: 0 - auto, 1 - low speed, 2 - high speed
        http://toni-develops.com:8061/thermostat-services/get-data?data=[0,52.80,28.63,0][1,51.90,28.38,0]
