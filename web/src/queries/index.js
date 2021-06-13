
import mongoDB  from'../connectors/database/mongodb';

const collectionName = 'thermostat';

export default {

    findFeatureFlagByName: async (flagName) => {
      const result = await mongoDB.find({ flagName }, collectionName);
      return result;
    },

    
   getFeatureFlags: async (url) => {
    const result = await mongoDB.find({}, collectionName);
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
        "flagName" : "LivingRoom",
        "value": "c|27",
        "group": "thermostats"
      }                 
     ]
    mongoDB.add(obj, collectionName, () => {}); 
   }   

}
