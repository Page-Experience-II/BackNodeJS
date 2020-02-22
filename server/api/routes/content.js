var express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');
const multer = require('../middleware/FileUpload');
//=> End of declared dependencies

// @desc    Signup new user
// @route   POST /api/v1/content/new
// @access  Public
router.post('/new', multer.upload.any(), contentController.createNewContent)

module.exports = router;