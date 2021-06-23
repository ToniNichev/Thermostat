import queries from '../../src/queries';


const sendResponse = (res, responseString) => {
  res
  .status(200)
  .set('Content-Type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('Access-Control-Allow-Headers', '*')  
  .send(responseString);  
}

const getReadings = async (req, res) => {
  const response = await queries.getThermostatData();
  sendResponse(res, response);
}

export { 
  getReadings 
};