const express = require('express');
const router = express.Router();
const homeController = require('../controller/home');

router.use('/user/', require('./user'));
router.use('/post/', require('./post'));
router.use('/comment/', require('./comment'));
router.use('/session', require('./session'));
router.get('/', homeController.home);

module.exports = router;