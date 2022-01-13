import * as mongoDB from "mongodb";

export const collections: { init?: mongoDB.Collection } = {}

export async function connectToDatabase () {

  const uri = 'mongodb+srv://b9system:b9system@cluster0.to5qx.mongodb.net/b9system?retryWrites=true&w=majority'
  const dbName = 'b9system'
  const dbCollection = 'init'

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(uri);
          
  await client.connect();
      
  const db: mongoDB.Db = client.db(dbName);
 
  const initCollection: mongoDB.Collection = db.collection(dbCollection);

  collections.init = initCollection;
     
       console.log(`Successfully connected to database: ${db.databaseName} and collection: ${initCollection.collectionName}`);
}