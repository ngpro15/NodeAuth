const express = require('express');
const { userSignup, userLogin, getUsers } = require('../controllers/user');
const router = express.Router();

router.post('/', userSignup);
router.get('/', getUsers);
router.post('/login', userLogin);

module.exports = router;