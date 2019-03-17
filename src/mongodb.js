const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = "mongodb://root:example@localhost:27017";

let DB = null;
module.exports = (cb)=>{  
  if(!DB){
    MongoClient.connect(url, (err, client)=>{
      if(err){
          return cb(err, null);
      }
      DB = client.db('actively');
      return cb(null, DB);
    })  
  }else{
    return cb(null, DB);
  }
}