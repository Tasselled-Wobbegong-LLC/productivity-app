const { json } = require('express');
// const fetch = require('node-fetch');
const databaseController = {};
const models = require('../models/user');

// checks to see if specified username exists in the database
// TODO - add username from req.body 

databaseController.createUser = async (req,res,next) => {
    const createUser = await models.User.create({username: `${req.body.username}`, password: `${req.body.password}`, task: {}});
    // console.log(createUser);
    res.locals.signedUp = true;
    
    return next();
}

databaseController.validateUser = async (req, res, next) => {
    try {
        const findUsername = await models.User.findOne({username: `${req.body.username}`, password: `${req.body.password}`}).exec()
            if(findUsername !== null){
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
    // console.log('inside of getUserTasks controller, ', req.body.username)
    const user = await models.User.findOne({username: `${req.body.username}`});
    // console.log('what is models.User', models.User)
    // console.log('user',  user);
    let holdTasks = user;
    // console.log('holdTasks',holdTasks)
    res.locals.userTasks = holdTasks;
    // console.log('res.locals.userTasks  inside of showData' + res.locals.userTasks)
    return next();
};

// given a task list in res.locals.userTasks, adds a new task (from req.body) and updates the database with new information
databaseController.updateUserTasksDB = async (req, res, next) => {
    // const users = await models.User.find({});
    // console.log(users);
    // return next();
    // console.log('res.locals.userTasks', res.locals.userTasks)

    // TODO: use username passed in the req.body as the value for username;
    const filter = { username: `${req.body.username}`};

    // TODO get task to add from req.body as the value for task `${res.body.taskId}`
    const taskId =  req.body.taskId;
    const taskName = req.body.task;
    const addingNewTask = {taskId: {taskName: taskName, isCompleted: false}} // req.body
    
    const updatedTasks = {...res.locals.userTasks, ...addingNewTask};
    
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
};







module.exports = databaseController;