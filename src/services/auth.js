const mapIdToUser = new Map();

function setUser(id, user) {
    mapIdToUser.set(id,user);
}

function getUser(id) {
    return mapIdToUser.get(id);
}

module.exports = {setUser, getUser};