require('dotenv').config();
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

module.exports = () => {
  const app = express();

  app.use(bodyParser.json());

  consign()
    .include('controllers')
    .then('db')
    .into(app);

  return app;
};
