const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;

const url = 'mongodb://localhost:27017';
const balls = 'mydatabase';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  const db = client.db(balls);

  app.post('/api/addBall', (req, res) => {
  
  });

  app.post('/api/deleteBall', (req, res) => {

  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
