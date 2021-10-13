const express = require('express');
const compression = require('compression');
const mongoose = require('mongoose');
require('dotenv').config();

const DB_URL = process.env.DB_URL;
const app = express();
const cors = require('cors');
const morgan = require('morgan');

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message);
  });

app.use(compression());
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('asd');
});

module.exports = app;
