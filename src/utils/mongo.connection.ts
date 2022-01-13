
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://dev:dev@cluster0.to5qx.mongodb.net/b9system?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(() => {  
  const query = client.db("b9system").collection("init");
  query.collection.insertOne({
    "name": "test",
  }),
  query.collection.find({}).toArray(function(err: any, result: any) {
    if (err) throw err;
    console.log(result);
  })
  client.close();
});
