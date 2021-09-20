const { json } = require('express');
// const fetch = require('node-fetch');
const databaseController = {};
const models = require('../models/user');

// creates a user in the database where username is equal to the value sent from the front end
// sends user's tasks back to front end, which will initially be a property 'task' with the value {}
databaseController.createUser = async (req, res, next) => {
  const createUser = await models.User.create({ username: `${req.body.username}`, password: `${req.body.password}`, task: {0:{taskName: 'You currently have no tasks!', isCompleted: false}} });
  // console.log(createUser);
  res.locals.signedUp = true;
  res.locals.userTasks = { task: {} };
  // console.log('res.locals.userTasks', res.locals.userTasks);
  return next();
};

// checking to see if username for signup doesn't exist
databaseController.newUsername = async (req, res, next) => {
  try {
    const findUsername = await models.User.findOne({ username: `${req.body.username}` }).exec();
    if (findUsername === null) {
      return next();
    }
    return next({
      log: 'databaseController.newUsername, username already exists',
      message: { err: 'Error inside of databaseController.newUsername' },
    });
  } catch {
    const err = {
      
      log: 'databaseController.newUsername, username already exists',
      message: { err: 'Error inside of databaseController.newUsername' },
    };
    return res.status(404).send(err.log).json();
  }
};

databaseController.validateUser = async (req, res, next) => {
    // console.log(`req.body, ${req.body.task}`);
    try {
    const findUsername = await models.User.findOne({ username: `${req.body.username}`, password: `${req.body.password}` }).exec();
    // console.log('findUsername inside validateUser', findUsername);
    if (findUsername !== null) {
      res.locals.validated = true;
    } else res.locals.validated = false;
    return next();
  } catch (error) {
    console.log(error);
  }
};

// gets a specificied user (from req.body) and logs their task list in res.locals.userTasks
databaseController.getUserTasks = async (req, res, next) => {
    // const user = await models.User.findOne({name: 'anotherUser'}).exec(); `${req.body.username}`
    console.log('inside of getUserTasks controller, ', req.body.username)
    try {
      const user = await models.User.findOne({username: `${req.body.username}`});
      console.log('what is models.User', models.User)
      console.log('user',  user);
      let holdTasks = user;
      console.log('holdTasks',holdTasks)
      res.locals.userTasks = holdTasks;
      console.log('res.locals.userTasks  inside of showData' + res.locals.userTasks)
      return next();
    } catch (error) {
        console.log('error inside getUserTasks controller');
    }
};

// given a task list in res.locals.userTasks, adds a new task (from req.body) and updates the database with new information
databaseController.updateUserTasksDB = async (req, res, next) => {
// const users = await models.User.find({});
// console.log(users);
// return next();
// console.log('res.locals.userTasks', res.locals.userTasks)
  // console.log('databaseController.updateUserTasksDB  req.body.username', req.body.username);
  // TODO: use username passed in the req.body as the value for username;
  // console.log('databaseController.updateUserTasksDB req.body.task', req.body.task)
  // console.log('databaseController.updateUserTasksDB req.body.taskId ', req.body.taskId)
  const filter = { username: `${req.body.username}`};
  try {
    // TODO get task to add from req.body as the value for task `${res.body.taskId}`
    const taskId =  req.body.taskId;
    const taskName = req.body.task;
    const addingNewTask = { [taskId]: {taskName: taskName, isCompleted: false } };// req.body
    // console.log('res.locals.userTasks inside of update', res.locals.userTasks);
    // console.log('addingNewTask inside of update', addingNewTask);
    const updatedTasks = { ...res.locals.userTasks.task, ...addingNewTask }; // ===> is wrong
    // console.log('updatedTasks, should jsut be an object of tasks', updatedTasks);
    const update = {task: updatedTasks};
    // `doc` is the document _after_ `update` was applied because of
    // `returnOriginal: false`

    // find the specified user, update their task list. If they don't exist, return null
    let doc = await models.User.findOneAndUpdate(filter, update, {
      returnOriginal: false
    }).exec();
    // console.log('doc.name',doc.name);
    // console.log('doc.task',doc.task); 
    return next();
      
  } catch (error){
    console.log('error inside of databaseController updateUserTaskDB')
  }
};







module.exports = databaseController;