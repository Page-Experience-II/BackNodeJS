var express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const multer = require('../middleware/FileUpload');
//=> End of declared dependencies

// @desc    Signup new user
// @route   POST /api/v1/users/signup
// @access  Public
router.post('/signup', multer.upload.any(), userController.createNewAccount)

// @desc    Validate email account
// @route   POST /api/v1/users/validate/account
// @access  Public
router.post('/validate/account', userController.validateAccount)

// @desc    Check if email validation code is valid
// @route   POST /api/v1/users/validate/code
// @access  Public
router.post('/validate/code', userController.isCodeValid)


router.get('/validate/account', (req, res, next) => {
    res.send("test get API")
})

module.exports = router;