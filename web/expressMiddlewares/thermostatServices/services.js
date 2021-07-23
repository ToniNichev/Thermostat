const sendResponse = (res, responseString) => {

  //res
  //.status(200)
  //.set('Content-Type', 'application/json')
  //.set('Access-Control-Allow-Origin', '*')
  //.set('Access-Control-Allow-Headers', '*')  

  res.status(200);
  res.removeHeader('X-Powered-By');
  res.removeHeader('Set-Cookie');
  res.removeHeader('Connection');
  res.send(responseString);  
}

/**
 * getFullReadings - returns all thermostat data
 * @param {*} req 
 * @param {*} res 
 * @param {*} thermostatData 
 */
const getFullReadings = async (req, res, thermostatData) => {
  // const response = await queries.getThermostatData();
  const response = JSON.stringify(thermostatData);
  sendResponse(res, response);
}

/**
 * getReadings returns desired temperature and receive thermostat curent humidity and temperature.
 * @param {*} req 
 * @param {*} res 
 */
const getReadings = async (req, res, thermostatData, thermostatResponse) => {
  let result = '';
  
  for(let i = 0; i < thermostatData.length; i ++) {
    // set up thermostatData with the real data from thermostats
    if(typeof thermostatResponse[i] != 'undefined' && thermostatResponse.length > 1) {
      // thermostatResponse[0][0] is the hub ID
      thermostatData[i].humidity = thermostatResponse[i + 1][1];
      thermostatData[i].curentTemp = thermostatResponse[i + 1][2];
    }
    // get the desired temperature
    result += '[' + thermostatData[i].thermostatId + ',' + thermostatData[i].requiredTemp + ',' + thermostatData[i].mode + ',' + thermostatData[i].fanMode + ']'; 
  }
  sendResponse(res, result);
}

const setDesiredTemperature = async (req, res, thermostatData, requestData) => {
  const data = requestData[1];
  const id = data[0];
  const temp = data[1];
  thermostatData[id].requiredTemp = temp;
  const result = `{"status": "success"}`;
  sendResponse(res, result);
}

const setThermostatMode = async (req, res, thermostatData, requestData) => {
  const data = requestData[1];
  const id = data[0];
  const mode = data[1];
  thermostatData[id].mode = mode;
  const result = `{"status": "success"}`;
  sendResponse(res, result);
}

const setThermostatFanMode = async (req, res, thermostatData, requestData) => {
  const data = requestData[1];
  const id = data[0];
  const mode = data[1];
  thermostatData[id].fanMode = mode;
  const result = `{"status": "success"}`;
  sendResponse(res, result);
}

export { 
  getFullReadings,
  getReadings,
  setDesiredTemperature,
  setThermostatMode,
  setThermostatFanMode
};