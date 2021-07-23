import { 
    getReadings,
    getFullReadings,
    setDesiredTemperature,
    setThermostatMode,
    setThermostatFanMode
} from './services';



const stringToObject = (str) => {
    const fullString = str == '' ? '[]' : '[' + str.split('][').join('],[') + ']';
    return JSON.parse(fullString);
}

const dispatch = async (req, res, thermostatsData) => {
    const action = req.params[0];
    const thermostatResponse = stringToObject(req.query.data);
    const hubId = thermostatResponse[0][0];
    switch(action) {
        case 'get-full-data':
            await getFullReadings(req, res, thermostatsData[hubId]);
            break;
        case 'get-data':
            //await getReadings(req, res, thermostatData);
            getReadings(req, res, thermostatsData[hubId], thermostatResponse);
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