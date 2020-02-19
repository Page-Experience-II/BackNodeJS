const validateEmailAccount = require('./validatAccoutSerice');
const isCodeValidService = require('./isCodeValidService')
const createNewAccountService = require("./createNewAccountService");

module.exports = {
    createNewAccountService,
    validateEmailAccount,
    isCodeValidService
}