import queries from "../../src/queries";
var crypto = require('crypto');

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

const registerUser = async (req, res) => {
  const requestObj = JSON.parse(req.body);
  const email = requestObj.email;
  const password = requestObj.password;
  const thermostatId = requestObj.thermostatId;
  if(email === '' && password === '' && thermostatId ==='') {
    sendResponse(res, {message: 'Some of fields are empty!', errorCode: 1});  
    return;
  }
  const user = await queries.getUser({email: email});
  if(user.length > 0) {
    sendResponse(res, {message: 'Email exists!', errorCode: 1});  
    return;
  } 
  const resultUpdate = await queries.addUser(requestObj);
  if(resultUpdate.result.ok === 1) {
    sendResponse(res, {message: `User addded !`});
  }
  else {
    sendResponse(res, {message: `Unknown error !`, errorCode: 1});
  }
}

const logIn = async (req, res) => {
  const requestObj = JSON.parse(req.body);
  const email = requestObj.email;
  const password = requestObj.password;
  const users = await queries.getUser({email: email, password: password });
  let user = users[0];
  delete(user.password);
  var name = `${user.email}salt${user.userId}`;
  var hash = crypto.createHash('md5').update(name).digest('hex');
  user.accessToken = hash;
  await queries.updateUser({email: email, password: password}, {accessToken: hash});
  if( typeof global?.users && typeof global?.users[hash]) {
    global.users[hash] = user;
  }

  sendResponse(res, user);  
}


export { 
  registerUser,
  logIn
};