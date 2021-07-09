import queries from '../../src/queries';


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
const getReadings = async (req, res, thermostatData) => {

  // get curent humidity and temperature from thermostats
  const thermostatString = req.query.data == '' ? '[]' : '[' + req.query.data.split('][').join('],[') + ']';
  const thermostatReadings = JSON.parse(thermostatString);

  // get thermostat object from DB
  // const response = await queries.getThermostatData();

  let result = '';
  for(let i = 0; i < thermostatData.length; i ++) {
    // set up thermostatData with the real data from thermostats
    if(typeof thermostatReadings[i] != 'undefined') {
      thermostatData[i].humidity = thermostatReadings[i][1];
      thermostatData[i].curentTemp = thermostatReadings[i][2];
    }
    // get the desired temperature

    result += '[' + thermostatData[i].id + ',' + thermostatData[i].requiredTemp + ',' + thermostatData[i].mode + ']'; 
  }
  sendResponse(res, result);
}

const setDesiredTemperature = async (req, res, thermostatData) => {
  const tempDataString = req.query.data;
  const tempData = JSON.parse(tempDataString);
  const id = tempData[0];
  const temp = tempData[1];
  thermostatData[id].requiredTemp = temp;
  const result = `{'status': 'success'}`;
  sendResponse(res, result);
}

export { 
  getFullReadings,
  getReadings,
  setDesiredTemperature
};