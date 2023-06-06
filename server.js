const express = require("express");
const cors = require("cors");
const axios = require("axios");

// const { MongoClient } = require('mongodb');

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

const CHAT_ENGINE_PROJECT_ID = "995972d3-5799-4d23-b450-2c41a9e223ed";
const CHAT_ENGINE_PRIVATE_KEY = "115f2f59-1678-4c53-b7d3-d2b2ee44a758";

// Connection URI
var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://zhoudache:alcahyd2023@ac-k2354sp-shard-00-00.ughawgz.mongodb.net:27017,ac-k2354sp-shard-00-01.ughawgz.mongodb.net:27017,ac-k2354sp-shard-00-02.ughawgz.mongodb.net:27017/?ssl=true&replicaSet=atlas-t1c3id-shard-0&authSource=admin&retryWrites=true&w=majority";
MongoClient.connect(uri, function(err, client) {
  const collection = client.db("test");
  console.log("eeeeeeeeeeee")
  // perform actions on the collection object
  client.close();
});


app.post("/signup", async (req, res) => {
  const { username, secret, email, first_name, last_name } = req.body;

  // Store a user-copy on Chat Engine!
  // Docs at rest.chatengine.io
  try {
    const r = await axios.post(
      "https://api.chatengine.io/users/",
      { username, secret, email, first_name, last_name },
      { headers: { "Private-Key": CHAT_ENGINE_PRIVATE_KEY } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.post("/login", async (req, res) => {
  const { username, secret } = req.body;

  // Fetch this user from Chat Engine in this project!
  // Docs at rest.chatengine.io
  try {
    const r = await axios.get("https://api.chatengine.io/users/me/", {
      headers: {
        "Project-ID": CHAT_ENGINE_PROJECT_ID,
        "User-Name": username,
        "User-Secret": secret,
      },
    });
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
