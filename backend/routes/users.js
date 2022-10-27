const express = require('express');
const { getUsers, createUser, getUser, authUser } = require('../controller/users');
const router = express.Router();


router.route('/')
.get(getUsers)
.post(createUser)
router.route('/login').post(authUser)

router.route('/:id')
    .get(getUser)

module.exports = router;