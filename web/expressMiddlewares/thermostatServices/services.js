import queries from "../../src/queries";


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
const getReadings = async (req, res, thermostatData, thermostatResponse, hubPreferences) => {
  let result = '';  

  console.log('hubPreferences :', hubPreferences);

  const hubId = req.hubId;
  //if(hubPreferences)
  //const l = thermostatData.length < 1 ? 1 : thermostatData.length;
  if(hubPreferences.mode === 1) {
    console.log('>>>>>>>>>>>> req.fullData :', req.fullData);
    if(req.fullData.length > 1 && req.fullData[1][0] == `added`) {
      const users = await queries.getUserIdByThermostatId(hubId);
      const userId = users[0].userId;   
      
      const thermostatObj =  {
        "thermostatId": thermostatData.length.toString(),
        "userId": userId,
        "thermostatName" : "test",
        "hubId": hubId,
        "group": "My home",        
        "humidity": "0",
        "curentTemp": "0",
        "requiredTemp": "0",
        "mode": "1",
        "fanMode": "0"
      };

      thermostatData.push(thermostatObj);
      queries.addThermostat(thermostatObj);
      hubPreferences.mode = 0;
      result = `[##]`;
    }
    else {
      // Add thermostat mode - send next available thermostat ID to the HUB
      result = `[#,${thermostatData.length}]`; 
    }
  }
  else if(hubPreferences.mode == 2) {
    sendResponse(res, '[##, 1]'); // ## - thermostat added, 1 - ok
    console.log("@#@#@#@#@#");
  }
  else {
    for(let i = 0; i < thermostatData.length; i ++) {
      // set up thermostatData with the real data from thermostats
      if(typeof thermostatResponse[i] != 'undefined' && thermostatResponse.length > 1) {
        // thermostatResponse[0][0] is the hub ID
        if(typeof thermostatResponse[i + 1] !== 'undefined') {
          thermostatData[i].humidity = thermostatResponse[i + 1][1];
          thermostatData[i].curentTemp = thermostatResponse[i + 1][2];
        }
      }
      // get the desired temperature
      result += '[' + thermostatData[i].thermostatId + ',' + thermostatData[i].requiredTemp + ',' + thermostatData[i].mode + ',' + thermostatData[i].fanMode + ']'; 
    }
    //if(result == '')
      //result = '[]';    
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

const setAddThermostatMode = async (req, res, thermostatData, requestData, hubPreferences) => {
  /*
  const data = requestData[1];
  const id = data[0];
  const mode = data[1];
  thermostatData[id].fanMode = mode;
  */
  const result = `{"status": "adding"}`;
  hubPreferences.mode = hubPreferences.mode == 1 ? 0 : 1;
  sendResponse(res, result);
}

export { 
  getFullReadings,
  getReadings,
  setDesiredTemperature,
  setThermostatMode,
  setThermostatFanMode,
  setAddThermostatMode
};