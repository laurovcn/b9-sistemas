
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://dev:dev@cluster0.to5qx.mongodb.net/b9system?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {  
  const testQuery = client.db("b9system").collection("init");
  testQuery.find({})  
  client.close();
});
