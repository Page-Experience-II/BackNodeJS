const mongoose = require('mongoose');

async function CreateNewUser(data, photo) {
    return new Promise((resolve, reject) => {
        resolve({
            _id: new mongoose.Types.ObjectId,
            fullname: data.fullname,
            email: data.email,
            passion: data.passion,
            profilePhoto: photo,
        })
    })

}

module.exports = {
    CreateNewUser
}