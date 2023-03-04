const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controller/user');

router.post('/add', userController.add);
router.post('/update', userController.update);
router.get('/signIn', passport.redirectAuthenticatedUser, userController.signIn);
router.get('/signUp', passport.redirectAuthenticatedUser ,userController.signUp);
router.get('/profile', passport.checkAuthenticatedUser, userController.profile);

module.exports = router;