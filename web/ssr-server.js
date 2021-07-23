import fs from 'fs';
import React from 'react';
import express from 'express';
import https  from 'https';
import fetch from 'isomorphic-fetch';
import App from './src/components/App';
import Loadable from 'react-loadable';
import manifest from './dist/loadable-manifest.json';
import { getBundles } from 'react-loadable/webpack';
import ReactDOMServer from 'react-dom/server';
import templateList from './src/templates/TemplateList';
import cookieParser from 'cookie-parser';
import cookiesManagement from './expressMiddlewares/cookiesManagement';
import requestDataFromAPI from './expressMiddlewares/requestDataFromAPI';
const publicPath = `${process.env.APP_HOST}:${process.env.ASSETS_SERVER_PORT}/dist/`;
// import pageData from './expressMiddlewares/pageData';
import thermostatServices from './expressMiddlewares/thermostatServices';
import weatherServices from './expressMiddlewares/WeatherServices';
import queries from './src/queries';
import bodyParser from 'body-parser';

const {APP_HOST, SERVER_PORT, ENVIRONMENT} = process.env;

let thermostatsData = {};
let usersData = [];

// load users and thermostats data
( async () => {
  usersData = await queries.getAllUsers();
  const thermostats = await queries.getAllThermostats();

  // sort thermostat data for each user
  thermostats.forEach( thermostat => {
    var hubId = thermostat.hubId;
    if(typeof thermostatsData[hubId] === 'undefined') {
      thermostatsData[hubId] = [thermostat];
    }
    else {
      thermostatsData[hubId].push(thermostat);
    }
  });
})();


console.log("SERVER_PORT: ", SERVER_PORT);
const app = new express();

app.use(express.json());
app.use(express.urlencoded({xtended: true}));
app.use(express.text())

app.use(bodyParser.text({ type: 'text/*' }));

app.use(cookieParser());
app.use('/server-build', express.static('./server-build'));
app.use('/dist', express.static('dist')); // to serve frontent prod static files
app.use('/favicon.ico', express.static('./static-assets/favicon.ico'));
app.use(express.static('static-assets'));

function response(req, res, apiData, templateName) {
  // make APP data available for SSR and browser.
  global.__API_DATA__ = apiData;
  const Html = templateList[templateName];

  // Prepare to get list of all modules that have to be loaded for this route
  let modules = [];
  ReactDOMServer.renderToString(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <App req={req} />
    </Loadable.Capture>
  );

  
  // Extract CSS and JS bundles
  const bundles = getBundles(manifest, modules); 
  const cssBundles = bundles.filter(bundle => bundle && bundle.file.split('.').pop() === 'css');
  const jsBundles = bundles.filter(bundle => bundle && bundle.file.split('.').pop() === 'js');


  const allJS = (jsBundles.map( ( {publicPath}) => `<script src='${publicPath}'></script>`)).join("\n");

  // don't add this to DEV since there, it will be served from Webpack-dev-server
  let mainCSS = ``;
  let allCSS = '';  

  if(process.env.ENVIRONMENT !== 'development') {
    mainCSS = `<link
      href='${publicPath}main.css'
      rel="stylesheet"
      as="style"
      media="screen, projection"
      type="text/css"
      charSet="UTF-8"
    />`; 

    allCSS = cssBundles.map( (bundle) => `
    <link
      href='${bundle.publicPath}'
      rel="stylesheet"
      as="style"
      media="screen, projection"
      type="text/css"
      charSet="UTF-8"
    />`).join("\n");
  }  

  const HTML_content = ReactDOMServer.renderToString(<App req={req} />);
  const html = <Html content={HTML_content} cssBundles={cssBundles} jsBundles={jsBundles} apiData={apiData}/>;
  res.status(200);
  res.send(`<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(html)}`);
  res.end();
}


// adding cookie middleware
app.use(cookiesManagement);

app.get('/Robots.txt', (req, res) => {   
  res.send(`
  User-agent: * Disallow: /
  `)
});

app.get('/thermostat-services/*', async (req, res) => {
  await thermostatServices(req, res, thermostatsData);
});

app.get('/weather-services/*', async (req, res) => {
  await weatherServices(req, res);
});


app.post('/services/setup', async (req, res) => {
  queries.setup();
  res
  .status(200)
  .set('Content-Type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('Access-Control-Allow-Headers', '*')
  .send('{"status": "sucess"}');  
});

app.post('/services/dropdb', async (req, res) => {
  const respond = queries.dropdb();
  res
  .status(200)
  .set('Content-Type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('Access-Control-Allow-Headers', '*')
  .send(respond);  
});


// All page requests

app.get('/*', 
  function (req, res, next) {
    requestDataFromAPI(req, res, thermostatsData, next);
  },
  function (req, res, next) {
   response(req, res, req.apiData, req.templateName);
});


Loadable.preloadAll().then(() => {

  if(ENVIRONMENT == 'development') {
    // use plain http for development
    app.listen(SERVER_PORT, () => {
      console.log(`😎 Server is listening on port ${SERVER_PORT}`);
    });  
  }
  else {
    // https requests might be too much of a work for Arduino
    app.listen(SERVER_PORT, () => {
      console.log(`😎 Server is listening on port ${SERVER_PORT}`);
    });  

    // we will pass the 'app' to 'https' server
    /*
    https.createServer({
      // replace with certificate location
      key: fs.readFileSync('/Users/toninichev/.getssl/toni-develops.com/toni-develops.com.key'),
      cert: fs.readFileSync('/Users/toninichev/.getssl/toni-develops.com/toni-develops.com.crt')
    }, app)
    .listen(SERVER_PORT);
    */
  }



});