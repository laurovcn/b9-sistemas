
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://dev:dev@cluster0.to5qx.mongodb.net/b9system?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
