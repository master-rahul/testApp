const express = require('express');
const router = express.Router();
const passport = require('passport');
const sessionController = require('../controller/session');

router.post('/create', passport.authenticate('local',{failureRedirect :'/user/signIn'}), sessionController.create);
router.get('/destroy', sessionController.destroy);

module.exports = router;