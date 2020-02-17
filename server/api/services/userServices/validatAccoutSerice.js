const userDao = require('../../daos/userDao/userDao');

async function validateEmailAccount (data, res) {
    // vlidation email and fullname
    // TODO ADD MORE VALIDATIONS
    if (data.email != "" && data.fullnae != "") {
        // Check if email exists
        if (await userDao.ifExistEmailValidated(data.email) > 0 || await userDao.ifExistUserAccount(data.email) > 0) {
        // Return error message
            console.log("Account exist or need to be validated!")
        } else {
            // create account validation
            console.log("Generate code and Send it", data);
    
            // send email
            res.send("hey");
        }
    }


}

module.exports = {
    validateEmailAccount
}