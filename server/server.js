const path = require('path');
const express = require('express');
const databaseController = require('./controllers/databaseController');
const app = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({extended: true}));

const { json } = require('express');
// const fetch = require('node-fetch');
// import fetch from 'node-fetch';
const fs = require('fs');

app.get('/', databaseController.showData ,(req,res) => {
  console.log('hello app.get server side');
  res.send(res.body)
})

// app.get('/', (req,res) => {
//   console.log('hello app.get server side');
//   // res.send(res.body)
// })

// app.get('/testing', (req, res) => {
//   console.log('req inside GET testing: ' + req.body);
//   console.log('res inside GET testing: ' + res.body)
// })

app.post('/testing',(req,res) => {
  // let messageFromFront =  JSON.parse(req);
  // console.log(messageFromFront);
  // res.render('send this back somewhere', {user:{display:'idkwhattodo'}});
  console.log(req.body)
  console.log('/testing endpoint in server')
  res.send(req.body);
})


app.use(express.static(path.resolve(__dirname, '../src')));

app.listen(port, () => {
  console.log(`listenening on port: ${port}`)
});

module.exports = app;