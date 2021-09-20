const path = require('path');
const express = require('express');
const databaseController = require('./controllers/databaseController');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const { json } = require('express');
const fs = require('fs');

app.get('/', (req, res) => {
  console.log('hello app.get server side');
  res.send(res.body);
});

app.post('/signup', databaseController.newUsername, databaseController.createUser, (req, res) => {
  console.log('inside signup endpoint');
  const ReturnEmptyObject = res.locals.userTasks;
  return res.status(200).json(ReturnEmptyObject);
});

// when the frontend / user adds a new task, add it to the database
app.post('/addtask', databaseController.getUserTasks, databaseController.updateUserTasksDB, (req, res) => {
  // let messageFromFront =  JSON.parse(req);
  // console.log(messageFromFront);
  // res.render('send this back somewhere', {user:{display:'idkwhattodo'}});
  // console.log('req.body  of the /addTask endpoint: ', req.body)
  console.log('/addtask endpoint in server')
  console.log('req.body.username',req.body.username)
  console.log('req.body.task',req.body.task)
  console.log('req.body.taskId',req.body.taskId)
  const body = {tasks: res.locals.userTasks}
  return res.status(200).json(body);
});

// when user tries to log in, check to see user exists if user exists redirect to userProfile endpoint
app.post('/login', databaseController.validateUser, databaseController.getUserTasks, (req, res) => {
  console.log('/login endpoint in server works, sending res.locals.userTasks.task');
  // console.log('req.body.username',req.body.username)
  // console.log('req.body.password',req.body.password)
  // console.log('res.locals.validated', res.locals.validated)
  if (res.locals.validated) {
    console.log('res.locals.userTasks', res.locals.userTasks);
    const body = { task: res.locals.userTasks };
    console.log('body of  login endpoint is ', body)
    return res.status(200).json(body);
  }
  return res.status(404).json({ task: 'user not validated' });
});

// app.get('/userProfile', databaseController.getUserTasks, (req,res)=>{
//   res.locals.userTask = null;
//   console.log('inside of  /userProfile  endpoint: '+ req.body)
//   return res.status(200).send('does front end receive this console log');
// })

app.use(express.static(path.resolve(__dirname, '../src')));

/**
 * configire express global error handler 
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */
app.use((err, req, res, next) => {
  const defaultErr = 
  {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred'}
  };
  const errorObj = Object.assign(defaultErr, err);
  console.error(errorObj.log);
  res.status(errorObj.status).send(errorObj.message.err);
});

app.listen(port, () => {
  console.log(`listenening on port: ${port}`);
});

module.exports = app;
