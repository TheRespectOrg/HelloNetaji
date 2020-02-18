const express = require('express');
const path = require('path');

const app = express();

// An api endpoint that returns a short list of items
app.get('/api/politicians', (req, res) => {

  const MongoClient = require('mongodb').MongoClient;
  const uri = `mongodb+srv://${process.env.MONGODB_ATLAS_USERNAME}:${process.env.MONGODB_ATLAS_PASSWORD}@cluster0-jbzhq.mongodb.net/politicians?retryWrites=true&w=majority`;
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    client.db("politicians")
      .collection("politicians")
      .find({}, function (err, result) {
        if (err) throw err;
        console.log(result);
        client.close();
        // perform actions on the collection object
        res.status(200).send("test");

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

console.log('App is listening on port http://localhost:' + port);