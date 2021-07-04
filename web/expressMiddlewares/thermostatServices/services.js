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
 * 
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
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getReadings = async (req, res, thermostatData) => {


  console.log("^^^^^");
  console.log(thermostatData);

  const thermostatString = '[' + req.query.data.split('][').join('],[') + ']';
  const thermostatReadings = JSON.parse(thermostatString);
  const response = await queries.getThermostatData();

  let result = '[';
  for(let i = 0; i < response.length; i ++) {
    // feed thermostatData with the real data from thermostats
    thermostatData[i].humidity = thermostatReadings[i][1];
    thermostatData[i].curentTemp = thermostatReadings[i][2];
    // get the desired temperature
    result += response[i].id + ',' + response[i].curentTemp + ',' + response[i].requiredTemp + ','; 
  }
  result += '0]';

  //result = '[0,' + new Date().getSeconds() + ',28.00],[1,30.21,28.25][' + new Date().getSeconds() + ']';
  result = '[0,' + new Date().getSeconds() + ',28.00],[1,30.21,28.25]';
  sendResponse(res, result);
}

export { 
  getFullReadings,
  getReadings 
};