var express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const multer = require('../middleware/FileUpload');
//=> End of declared dependencies

// @desc    Signup new user
// @route   POST /api/v1/signup
// @access  Public
router.post('/signup', multer.upload.any(), userController.createNewAccount)

// @desc    Validate email account
// @route   POST /api/v1/users/validate/account
// @access  Public
router.post('/validate/account', userController.validateAccount)

router.get('/validate/account', (req, res, next) => {
    res.send("test get API")
})

module.exports = router;