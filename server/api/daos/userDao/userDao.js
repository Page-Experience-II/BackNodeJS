const EmailValiation = require('../../models/EmailValidation');
const User = require('../../models/User');
const AccountValidateCalss = require('../../class/AccountValidationClass');

ifExistEmailValidated = (email) => {
    return new Promise((resolve, reject) => {
        EmailValiation.find({
            email: email
        }).exec()
            .then(response => {
                console.log("response.length:", response);
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
                console.log("response.length:", response);
                resolve(response.length);
            }).catch(err => console.log("existEmailToBeValidated ERR :", err));
    })
}

async function createAccountValidation(data, code) {
    return new Promise(async (resolve, reject) => {
        // TODO CREATE ACCOUNT VALIDATION
        let accountValidate = new EmailValiation(await AccountValidateCalss.AccountValidate(data, code));
        console.log("accountValidate :", accountValidate);
        accountValidate.save()
        .then(res => {
            resolve(accountValidate);
        }).catch(err => {
            console.log("createAccountValidation ERR :", err)
            resolve(false);
        })
    })
}


module.exports = {
    createAccountValidation,
    ifExistEmailValidated,
    ifExistUserAccount
}