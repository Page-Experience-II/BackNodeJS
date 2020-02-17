const EmailValiation = require('../../models/EmailValidation');
const User = require('../../models/User');

ifExistEmailValidated = (email) => {
    return new Promise((resolve, reject) => {
        EmailValiation.find({
            email: email
        }).exec()
            .then(response => {
                resolve(response.length);
            }).catch(err => console.log("existEmailToBeValidated ERR :", err));
    })
}

ifExistUserAccount = (email) => {
    return new Promise((resolve, reject) => {
        User.find({
            email: email
        }).exec()
            .then(response => {
                resolve(response.length);
            }).catch(err => console.log("existEmailToBeValidated ERR :", err));
    })
}

createAccountValidation = (data) => {
    // TODO CREATE ACCOUNT VALIDATION
}


module.exports = {
    ifExistEmailValidated,
    ifExistUserAccount
}