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

const getFullReadings = async (req, res) => {
  const response = await queries.getThermostatData();
  sendResponse(res, response);
}

const getReadings = async (req, res) => {
  const response = await queries.getThermostatData();
  let result = '[';
  for(let i = 0; i < response.length; i ++) {
    console.log(">>>", response[i])
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