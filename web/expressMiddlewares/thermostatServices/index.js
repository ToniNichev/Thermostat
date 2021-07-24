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
    const requestData = stringToObject(req.query.data);
    const hubId = requestData[0][0];
    console.log(">>>", hubId)
    switch(action) {
        case 'get-full-data':
            await getFullReadings(req, res, thermostatsData[hubId]);
            break;
        case 'get-data':
            getReadings(req, res, thermostatsData[hubId], requestData);
            break;   
        case 'set-desired-temperature': 
            await setDesiredTemperature(req, res, thermostatsData[hubId], requestData);
            break;
        case 'set-thermostat-mode': 
            await setThermostatMode(req, res, thermostatsData[hubId], requestData);
            break;  
        case 'set-thermostat-fan-mode': 
            await setThermostatFanMode(req, res, thermostatsData[hubId], requestData);
            break;            
    }
}

export default dispatch;