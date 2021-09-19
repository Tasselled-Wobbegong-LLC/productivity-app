const { json } = require('express');
// const fetch = require('node-fetch');
const databaseController = {};
const models = require('../models/user');

databaseController.showData = async (req, res, next) => {
    const users = await models.User.find({});
    console.log(users);
    return next();
}



module.exports = databaseController;