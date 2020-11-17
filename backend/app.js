const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(
  express.json({
    extended: false,
  })
);

mongoClient.connect(process.env.MONGODB_URI, function (err, db) {
  console.log('Connected successfully to database');

  db.close();
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, GET');
    return res.status(200).json({});
  }

  next();
});

app.use('/users', require('./routes/users'));

app.get('/', (req, res) => {
  res.json({
    msg: 'its working!',
  });
});

module.exports = app;
