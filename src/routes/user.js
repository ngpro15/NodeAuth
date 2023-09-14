const express = require('express');
const { userSignup, userLogin, getUsers } = require('../controllers/user');
const {restrict} = require('../middlewares/auth')
const router = express.Router();

router.post('/', userSignup);
router.get('/', restrict, getUsers);
router.post('/login', userLogin);

module.exports = router;