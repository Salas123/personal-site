const {MongoClient} = require("mongodb");
const DB = process.env.ATLAS_URI;

const client = new MongoClient(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


let _db;


module.exports = {
  connectToServer: function (callback){
      client.connect(function (err, DB){
          if(DB){
              _db = DB.db('personal_site');
              console.log('Successfully connected to MongoDB!');
          }
          return callback(err);
      });
  },

    getDB: function (){
      return _db;
    }
};
