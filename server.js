import express from 'express';
import mongodb from 'mongodb';
var app = express();

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

    app.listen(8080, () => {
      console.log('Connected to MongoDB, Game server is running on port 8080');
    });
  }
);
