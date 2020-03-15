const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
app.use(cors());

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

const getMongoClient = () => {
  const MongoClient = require('mongodb').MongoClient;
  const uri = `mongodb+srv://${process.env.MONGODB_ATLAS_USERNAME}:${process.env.MONGODB_ATLAS_PASSWORD}@cluster0-jbzhq.mongodb.net/politicians?retryWrites=true&w=majority`;
  const client = new MongoClient(uri, { useNewUrlParser: true });
  return client;
}

// An api endpoint for saving petitions data
app.post('/api/petitions', (req, res) => {
  var petition = {
    Name: req.body.Name,
    Email: req.body.Email,
    Action: req.body.Action,
    ActionArea: req.body.ActionArea,
    Sections: req.body.Sections,
    CaseConsent: req.body.CaseConsent,
    PinCode: req.body.PinCode,
    Phone: req.body.Phone,
    Address: req.body.Address
  };

  
  const client = getMongoClient();

  client.connect(err => {
    client.db("petitions")
      .collection("petitions")
      .insertOne(petition, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        client.close();
      });
  });
});

// An api endpoint that returns a short list of items
app.get('/api/politicians', (req, res) => {
  const client = getMongoClient();

  client.connect(err => {
    client.db("politicians")
      .collection("politicians")
      .find({}).toArray(function (err, docs) {
        if (err) {
          // Reject the Promise with an error
          res.status(500).send("Error");
        }
        console.log(docs);

        // Resolve (or fulfill) the promise with data
        client.close();

        res.status(200).send(docs);
      });
    // , function (err, result) {
    //   if (err) throw err;
    //   console.log(result);
    //   // perform actions on the collection object
    //   res.status(200).send("test");

    // });
  });

});

// An api endpoint that returns a short list of items
app.get('/api/petitions/count', (req, res) => {
  const client = getMongoClient();

  client.connect(err => {
    client.db("petitions")
      .collection("petitions")
      .countDocuments({}, function (err, petitionsCount) {
        if (err) {
          // Reject the Promise with an error
          res.status(500).send("Error");
        }
        console.log(petitionsCount);

        // Resolve (or fulfill) the promise with data
        client.close();

        res.status(200).send(petitionsCount);
      });
  });

});

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../client')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`App is listening on port http://localhost:${port}`);