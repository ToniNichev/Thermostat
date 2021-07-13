import PageData from '../src/containers/PageLayout/PageData'; 
import queries from '../src/queries';

const requestDataFromAPI = async (req, res, next) => {
  // not in use right now. Suppose to supply data to the front end on load.
  const result = await queries.getFeatureFlags();
  const templateName = typeof PageData[req.url] != 'undefined' ? PageData[req.url].template : '';    
  req.templateName = templateName;
  req.apiData = result;
  next(); // continue once the data is available.

}

export default requestDataFromAPI;