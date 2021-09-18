const path = require('path');
const express = require('express');
const databaseController = require('./controllers/databaseController');
const app = express();
const port = 3000;


const { json } = require('express');
// const fetch = require('node-fetch');
// import fetch from 'node-fetch';
const fs = require('fs');

app.get('/', databaseController.showData ,(req,res) => {
  res.send('hello');

})

app.use(express.static(path.resolve(__dirname, '../src')));



app.listen(port, () => {
  console.log(`listenening on port: ${port}`)
});

module.exports = app;