const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = "mongodb://mongo:27017";
module.exports = (cb)=>{
  MongoClient.connect(url, (err, client)=>{
    if(err){
        return cb(err, null);
    }
    const db = client.db('test').collection('examples');
    return cb(null, db);
  })  
}