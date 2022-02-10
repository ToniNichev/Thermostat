import PageData from '../src/containers/PageLayout/PageData'; 
const url = require('url');
const querystring = require('querystring');
import queries from '../src/queries';



const stringToObject = (str) => {
  const fullString = str == '' ? '[]' : '[' + str.split("][").join("],[") + ']';
  return JSON.parse(fullString);
}

const requestDataFromAPI = async (req, res, thermostatsData, next) => {  
  const userFromCookie = typeof req.cookies.user === 'undefined' ? undefined : JSON.parse(req.cookies.user);

  
  if(typeof userFromCookie !== 'undefined' && typeof global?.users[userFromCookie.hash] === 'undefined') {
    const user = queries.getUser({email: userFromCookie.email, userFromCookie: userFromCookie.accessToken});
    const accessToken = userFromCookie.accessToken;
    global.users[accessToken] = user;
  }


  req.parsedUrl = url.parse(req.url);
  const pathname = req.parsedUrl.pathname;  
  const parsedQs = querystring.parse(req.parsedUrl.query);
  
  
  if(pathname === '/setup' || typeof parsedQs.data === 'undefined') {
    // shortcut to run setup without credentials !!! REMOVE IT ONCE DONE !
    req.templateName = 'Html'; 
    req.apiData = {};
    next();
    return;
  }


  if(typeof parsedQs.data === 'undefined') {
    console.log("#####################################################################");
    console.log("ERROR ! NO `data` Query String Param!!!");
    console.log("#####################################################################");
  }

  const validDataObj = stringToObject(parsedQs.data); // thermostat(s) ids

  if(typeof validDataObj === 'undefined' ||  validDataObj.length == 0) {
    // user does not have this thermostat ID
    req.error = {
      code : 'invalid_thermostat_id'
    }
    req.templateName = 'InternalError'; 
    next();
    return;
  }

  const hubId = validDataObj[0][0];
  const isValidHubIdForThisUser = userFromCookie?.thermostatHubs?.find(element => element === hubId);

  if(typeof isValidHubIdForThisUser === 'undefined' && typeof userFromCookie !== 'undefined') {
    // user does not have this thermostat ID
    req.error = {
      code : 'invalid_thermostat_id'
    }
    req.templateName = 'InternalError';
  }
  else {  
    req.fullData = validDataObj;
    req.hubId = hubId;
    // send thermostats data for this specific hub from the request
    const thermostatDataForThisHub = typeof thermostatsData[hubId] !== 'undefined' ? thermostatsData[hubId] : {};
    req.apiData = {"hubId": hubId, "thermostatsData" : thermostatsData[hubId]};
    const templateName = typeof PageData[pathname] != 'undefined' ? PageData[pathname].template : '';    
    req.templateName = templateName;
  }
  next(); // continue once the data is available.

}

export default requestDataFromAPI;