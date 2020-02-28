var express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');
const multer = require('../middleware/FileUpload');
const authCheck = require('../middleware/check-auth');
//=> End of declared dependencies

// @desc    Create new content
// @route   POST /api/v1/content/new
// @access  private
router.post('/new', authCheck, multer.upload.any(), contentController.createNewContent)

// @desc    Fetch all content by pagination
// @route   POST /api/v1/content/all/limit/:limit/page/:page
// @access  private
router.get('/all/limit/:limit/page/:page', contentController.getAllContents)

module.exports = router;