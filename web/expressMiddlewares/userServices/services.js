import queries from "../../src/queries";

let newDeviceName = "NO NAME";

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

  const result = `{"status": "success"}`;
  sendResponse(res, result);
}



export { 
  registerUser

};