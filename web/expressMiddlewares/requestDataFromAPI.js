import PageData from '../src/containers/PageLayout/PageData'; 
const url = require('url');
const querystring = require('querystring');
//import queries from '../src/queries';


const requestDataFromAPI = async (req, res, thermostatsData, next) => {  
  console.log("^^^^^^^^^^^^^^^^^^^^");
  console.log(req.url);
  console.log("^^^^^^^^^^^^^^^^^^^^");
  req.parsedUrl = url.parse(req.url);
  const pathname = req.parsedUrl.pathname;  
  const parsedQs = querystring.parse(req.parsedUrl.query);
  if(typeof parsedQs.data === 'undefined') {
    console.log("#####################################################################");
    console.log("ERROR ! NO `data` Query String Param!!!");
    console.log("#####################################################################");
  }
  const dataString = JSON.parse(parsedQs.data);
  const hubId = dataString[0];
  // send thermostats data for this specific hub from the request
  req.apiData = {"hubId": hubId, "thermostatsData" : thermostatsData[hubId]};
  const templateName = typeof PageData[pathname] != 'undefined' ? PageData[pathname].template : '';    
  req.templateName = templateName;
  next(); // continue once the data is available.

}

export default requestDataFromAPI;