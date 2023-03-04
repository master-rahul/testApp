const express = require('express');
const router = express.Router();
const postController = require('../controller/post');
const passport = require('passport');

router.post('/create', passport.checkAuthenticatedUser, postController.create);
router.get('/delete/:id', postController.delete);

module.exports = router;