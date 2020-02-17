const userService = require('../services/userServices/index');

createNewAccount = (req, res, next) => {
    console.log("Create account");
}

validateAccount = (req, res, next) => {
    
    userService.validateEmailAccount.validateEmailAccount(req.body, res);
}

module.exports = {
    createNewAccount,
    validateAccount
}