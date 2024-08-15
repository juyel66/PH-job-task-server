const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

// ph-job-task

// MfwHKRLFa5lxEdAF





const uri = "mongodb+srv://ph-job-task:MfwHKRLFa5lxEdAF@juyel.zm7wayi.mongodb.net/?retryWrites=true&w=majority&appName=JUYEL";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });




    const ProductCollections = client.db('Ph-job-task').collection('product');


    // product related api 
    app.get('/products', async(req, res)=>{
        const result = await ProductCollections.find().toArray();
        res.send(result);
    })




    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('ph-job-task server is running');
})

app.listen(port, ()=>{
    console.log(`ph-job-task server is running on port:${port}`)
})

