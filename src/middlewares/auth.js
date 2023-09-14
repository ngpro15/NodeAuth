const {getUser} = require('../services/auth');

async function restrict(req, res, next) {
    const userUid = req.headers.cookie?.slice(4);
    if(!userUid) {
        res.status(403).send("You are not authorized to view this. Pls login!");
    }
    else {
        const user = getUser(userUid);
        if(!user) res.status(404).send("Pls login again!");
        else {
            req.user = user;
            next();
        }
    }
}

module.exports = {restrict};