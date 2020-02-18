const userDao = require('../../daos/userDao/userDao');
const utils = require('../../utils/utils');

async function validateEmailAccount (data, res) {
    // vlidation email and fullname
    // TODO ADD MORE VALIDATIONS
    console.log("Generate code and Send it", data);
    if (data.email != "" && data.fullname != "") {
        // Check if email exists
        if (await userDao.ifExistEmailValidated(data.email) > 0 || await userDao.ifExistUserAccount(data.email) > 0) {
        // Return error message
            console.log("Account exist or need to be validated!");
            res.status(200).json({
                success: true,
                msg: "Account exists",
                code: 111
            })
        } else {
            // create account validation
            console.log("Generate code and Send it", data);
            let code = utils.generateRandomNum(6);
            let response = await userDao.createAccountValidation(data, code);
            // send email
            console.log("Res :", response);
            if (response !== false) {
                res.status(200).json({
                    succes: true,
                    code: 200,
                    data: {
                        id: response._id,
                        validationCode: response.validationCode,
                    }
                })
            }
            res.status(200).json({
                success: true,
                msg: "An error occured",
                code: 500
            })
        }
    }


}

module.exports = {
    validateEmailAccount
}