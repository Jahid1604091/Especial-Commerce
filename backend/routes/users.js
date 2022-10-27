const express = require('express');
const { getUsers, createUser, authUser, getProfile } = require('../controller/users');
const { protect } = require('../middleware/auth');
const router = express.Router();


router.route('/')
.get(getUsers)
.post(createUser)
router.route('/login').post(authUser)

router.route('/:id')
router.route('/profile').get(protect,getProfile)

module.exports = router;