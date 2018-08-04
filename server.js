const express = require('express');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

mongodb.MongoClient.connect(
  'mongodb://localhost:27017/',
  { useNewUrlParser: true },
  (err, client) => {
    var db = client.db('crudGames');

    app.get('/api/games', (req, res) => {
      db.collection('games')
        .find({})
        .toArray((err, games) => {
          res.json({ games });
        });
    });

    app.post('/api/games', (req, res) => {
      db.collection('games').insert(req.body.data, (err, result) => {
        if (err) {
          throw err;
        } else {
          res.json({ game: result.ops[0] });
        }
      });
    });

    app.use((req, res) => {
      res.status(404).json({
        errors: {
          global:
            'Something went wrong on network. Still working on it. please try again later'
        }
      });
    });

    app.listen(8080, () => {
      console.log('Connected to MongoDB, Game server is running on port 8080');
    });
  }
);
