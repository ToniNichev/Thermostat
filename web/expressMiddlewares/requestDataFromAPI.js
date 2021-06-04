import PageData from '../src/containers/PageLayout/PageData'; 
import queries from '../src/queries';

const requestDataFromAPI = async (req, res, next) => {

  const result = await queries.getFeatureFlags();
  const templateName = PageData[req.url].template;    
  req.templateName = templateName;
  req.apiData = result;
  next(); // continue once the data is available.

}

export default requestDataFromAPI;