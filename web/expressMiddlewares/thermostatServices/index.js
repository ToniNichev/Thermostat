import { 
    getReadings,
    getFullReadings,
    setDesiredTemperature,
    setThermostatMode,
    setThermostatFanMode,
    setAddThermostatMode
} from './services';



const stringToObject = (str) => {
    const fullString = str == '' ? '[]' : '[' + str.split('][').join('],[') + ']';
    return JSON.parse(fullString);
}

const ThermostatServices = async (req, res, thermostatsData, hubPreferences) => {
    //console.log(">>>>>>> hubMode >>>>>>>>", hubMode);
    //hubMode = 1;
    const action = req.params[0];
    const requestData = stringToObject(req.query.data);
    const hubId = requestData[0][0];
    console.log(">>>", hubId)
    switch(action) {
        case 'get-full-data':
            await getFullReadings(req, res, thermostatsData[hubId]);
            break;
        case 'get-data':
            getReadings(req, res, thermostatsData[hubId], requestData, hubPreferences);
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
        case 'add-thermostat': 
            await setAddThermostatMode(req, res, thermostatsData[hubId], requestData, hubPreferences);        
            break;        
    }
}

export default ThermostatServices;