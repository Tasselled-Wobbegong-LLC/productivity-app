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

app.get('/', (req,res) => {
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

// when the frontend / user adds a new task, add it to the database
app.post('/addtask', databaseController.getUserTasks ,databaseController.updateUserTasksDB,(req,res) => {
  // let messageFromFront =  JSON.parse(req);
  // console.log(messageFromFront);
  // res.render('send this back somewhere', {user:{display:'idkwhattodo'}});
  console.log(req.body)
  console.log('/testing endpoint in server')
  res.send(req.body);
})

// when user tries to log in, check to see user exists if user exists redirect to userProfile endpoint
app.post('/login', databaseController.validateUser, (req,res) => {
  console.log('/testing endpoint in server')
  if(res.locals.validated) {
    return res.redirect('/userProfile')
  }
  return res.status(404).send("user not validated")
})

app.get('/userProfile', databaseController.getUserTasks, (req,res)=>{
  return res.status(200).json(res.locals.userTasks);
})


app.use(express.static(path.resolve(__dirname, '../src')));

app.listen(port, () => {
  console.log(`listenening on port: ${port}`)
});

module.exports = app;