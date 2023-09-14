const User = require('../models/user');

async function userSignup(req, res) {
    try {
        const {name, email, password} = req.body;
        await User.create({
            name,
            email,
            password
        });
        res.status(201).send("User sign up successful");
    }
    catch(err) {
        res.status(400).send("User signup failed!");
    }
}

async function getUsers(req, res) {
    try {
        const userList = await User.find({});
        if(!userList) res.status(404).send("No users exist");
        else {
            res.status(200).send(`List of registered users is given below:\n${userList}`);
        }
    }
    catch(err) {
        res.status(400).send(`Error fetching users as ${err}`);
    }
}

async function userLogin(req, res) {
    try {
        const {email, password} = req.body;
        const getUser = await User.findOne({email, password});
        if(!getUser) res.status(404).send("User does not exist. Pls sign up!");
        else res.status(200).send("User login successful");
    }
    catch(err) {
        res.status(400).send("User login failed. Pls try again!");
    }
}

module.exports = {userSignup, userLogin, getUsers};