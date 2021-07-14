import { 
    getReadings,
    getFullReadings,
    setDesiredTemperature,
    setThermostatMode,
    setThermostatFanMode
} from './services';

const dispatch = async (req, res, thermostatData) => {
    const action = req.params[0];
    switch(action) {
        case 'get-full-data':
            await getFullReadings(req, res, thermostatData);
            break;
        case 'get-data':
            await getReadings(req, res, thermostatData);
            break;   
        case 'set-desired-temperature': 
            await setDesiredTemperature(req, res, thermostatData);
            break;
        case 'set-thermostat-mode': 
            await setThermostatMode(req, res, thermostatData);
            break;  
        case 'set-thermostat-fan-mode': 
            await setThermostatFanMode(req, res, thermostatData);
            break;            
    }
}

export default dispatch;