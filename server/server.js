const express = require("express")
const app = express()


const { MongoClient } = require("mongodb");

// Connection URI
const uri =
  "mongodb://localhost:27017/?maxPoolSize=20&w=majority";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Establish and verify connection
   const db = await client.db("userData").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

const food = { _id: 1, name: "Jollof Rice", flavour: "extremely hot", origin: "West Africa"};
const result =  db.collection.insertOne(food);
console.log(
   `A document was inserted with the _id: ${result.insertedId}`,
);



app.listen(4001, (req, res)=>{
console.log("API listening at port 4001");
})