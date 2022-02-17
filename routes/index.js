const express = require('express');
const router = express.Router()
const indexController = require('../controllers/index')

router.get('/', indexController.home)
router.get('/v1/userlist', indexController.getUserList)

module.exports = router;