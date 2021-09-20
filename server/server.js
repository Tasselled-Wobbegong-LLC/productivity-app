const path = require('path');
const express = require('express');
const databaseController = require('./controllers/databaseController');
const app = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const { json } = require('express');
const fs = require('fs');

app.get('/', (req,res) => {
  console.log('hello app.get server side');
  res.send(res.body)
})

app.post('/signup',databaseController.createUser, (req,res)=>{
  console.log('inside signup endpoitn');
  return res.status(200).send('Signed up!');
})

// when the frontend / user adds a new task, add it to the database
app.post('/addtask', databaseController.getUserTasks ,databaseController.updateUserTasksDB,(req,res) => {
  // let messageFromFront =  JSON.parse(req);
  // console.log(messageFromFront);
  // res.render('send this back somewhere', {user:{display:'idkwhattodo'}});
  // console.log('req.body  of the /addTask endpoint: ', req.body)
  // console.log('/testing endpoint in server')
  res.send(req.body);
})

// when user tries to log in, check to see user exists if user exists redirect to userProfile endpoint
app.post('/login', databaseController.validateUser, databaseController.getUserTasks, (req,res) => {
  console.log('/login endpoint in server works, sending res.locals.userTasks.task')
  // console.log('req.body.username',req.body.username)
  // console.log('req.body.password',req.body.password)
  // console.log('res.locals.validated', res.locals.validated)
  if(res.locals.validated) {
    console.log('res.locals.userTasks', res.locals.userTasks.task)
    const body = {task: res.locals.userTasks.task};
    return res.status(200).json(body)
  }
  return res.status(404).json({task:"user not validated"})
})

// app.get('/userProfile', databaseController.getUserTasks, (req,res)=>{
//   console.log('inside of  /userProfile  endpoint: '+ req.body)
//   return res.status(200).send('does front end receive this console log');
// })


app.use(express.static(path.resolve(__dirname, '../src')));

app.listen(port, () => {
  console.log(`listenening on port: ${port}`)
});

module.exports = app;