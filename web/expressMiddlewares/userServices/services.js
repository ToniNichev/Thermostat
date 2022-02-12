import queries from "../../src/queries";
var crypto = require('crypto');

const sendResponse = (res, responseString) => {
  res.status(200);
  res.removeHeader('X-Powered-By');
  res.removeHeader('Set-Cookie');
  res.removeHeader('Connection');
  res.send(responseString);  
}

const registerUser = async (req, res) => {
  let requestObj = JSON.parse(req.body);
  const email = requestObj.email;
  const password = requestObj.password;
  const hubId = requestObj.hubId;
  if(email === '' && password === '' && hubId ==='') {
    sendResponse(res, {message: 'Some of fields are empty!', errorCode: 1});  
    return;
  }
  const user = await queries.getUser({email: email});
  if(user.length > 0) {
    sendResponse(res, {message: 'Email exists!', errorCode: 1});  
    return;
  } 
  const hubResult = await queries.getHub({id: hubId});
  if(hubResult.length === 0) {
    sendResponse(res, {message: 'Cannot find purchased hub with this id!', errorCode: 2});  
    return;
  }  

  const updateHubResult = await queries.updateHub({id: hubId}, {registered: true});

  requestObj.id = hubId + '-u';
  requestObj.group = 'user';
  requestObj.thermostatHubs = [hubId];
  const resultUpdate = await queries.addUser(requestObj);
  if(resultUpdate.result.ok === 1) {
    sendResponse(res, {message: `User addded !`});

  }
  else {
    sendResponse(res, {message: `Unknown error !`, errorCode: 1});
  }
}

const logIn = async (req, res, usersData) => {
  const requestObj = JSON.parse(req.body);
  const email = requestObj.email;
  const password = requestObj.password;
  const users = await queries.getUser({email: email, password: password });
  if(users.length === 0) {
    sendResponse(res, {error:1, message: 'Username or password do not match!'});  
    return;
  }
  let user = users[0];
  delete(user.password);
  const name = `${user.email}salt${user.userId}`;
  const hash = crypto.createHash('md5').update(name).digest('hex');
  const userId = user.id;
  user.accessToken = hash;
  await queries.updateUser({email: email, password: password}, {accessToken: hash});
  if( typeof usersData[userId] === 'undefined') {
    usersData[userId] = user;
  }

  sendResponse(res, user);  
}


export { 
  registerUser,
  logIn
};