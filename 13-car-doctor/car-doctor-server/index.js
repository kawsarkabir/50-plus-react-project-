const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// midleware
app.use(cors());
app.use(express.json());

// mongoDB connect config
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hvlfmu8.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  const serviceCollection = client.db("carDoctor").collection("services");

  app.get("/services", async (req, res) => {
    res.send(await serviceCollection.find().toArray());
  });

  app.get("/services/:id", async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const options = {
      projection: {title: 1, img:1 },
    };
    res.send(await serviceCollection.findOne(query, options));
  });

  try {
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.log);

app.get("/", (req, res) => {
  res.json("car doctor is comming here.........");
});

app.listen(port, (req, res) => {
  console.log(`car doctor is running ${port}`);
});
