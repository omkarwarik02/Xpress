const express = require('express');
const upload = require("../middlewares/multerMiddleware");
const { CreatePost } = require("../controllers/postController");
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/posts', authMiddleware, upload.single('image'),CreatePost);


module.exports = router;