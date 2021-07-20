
import mongoDB  from'../connectors/database/mongodb';

const collectionName = 'thermostat';

export default {

    findFeatureFlagByName: async (flagName) => {
      const result = await mongoDB.find({ flagName }, collectionName);
      return result;
    },

    getThermostatData: async () => {
      const result = await mongoDB.find({}, collectionName);
      return result;     
     },    
    
   getFeatureFlags: async () => {
    const result = await mongoDB.find({}, collectionName);
    console.log(result);
    return result;     
   },

   updateFeatureFlag: async (searchObject, newObject) => {
     delete newObject._id;
    mongoDB.update(searchObject, newObject, collectionName, (result) => {
      return true;
    });     
   },    

   addFeatureFlag: async (flagData) => {
    mongoDB.add(flagData, collectionName, () => {
      return true;
    });     
   }, 

   dropdb: async () => {
    const result = mongoDB.dropDB();
    return result;
   },

   setup: async () => {
     mongoDB.dropDB();
     const obj = [
      {
        "UserId": "0",
        "ThermostatName" : "Living Room",
        "group": "My home",        
        "id": "0",
        "humidity": "0",
        "curentTemp": "0",
        "requiredTemp": "0",
        "mode": "1",
        "fanMode": "0"
      },
      {
        "UserId": "0",
        "ThermostatName" : "Bedroom",
        "group": "My home",        
        "id": "1",
        "humidity": "0",
        "curentTemp": "0",
        "requiredTemp": "0",
        "mode": "1",
        "fanMode": "0"        
      }                 

     ]
    mongoDB.add(obj, collectionName, () => {}); 
   }   

}
