const express = require('express');
const router = express.Router();
const commentController = require('../controller/comment');

router.post('/create', commentController.create);
router.get('/delete/:id', commentController.delete);

module.exports = router;