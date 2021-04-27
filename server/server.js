require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const db = require('./database/database.js');
const getSimilarItemsByViews = require('./database/methods.js');
const path = require('path');

app.use(morgan('dev'));
app.use(cors());
app.use('/', express.static(path.resolve('public')));

app.get('/:id', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

app.get('/similar-products-by-views/:id', (req, res) => {
  getSimilarItemsByViews(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.error('Unable to get similar items by views: ', err));
});

module.exports = app;