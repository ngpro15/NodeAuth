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

module.exports = {userSignup};