const mongoose = require('mongoose');

async function AccountValidate(data) {
    return new Promise((resolve, reject) => {
        resolve({
            _id: new mongoose.Types.ObjectId,
            fullname: data.fullname,
            email: data.email,
            validationCode: ""
        })
    })

}

module.exports = {
    AccountValidate
}