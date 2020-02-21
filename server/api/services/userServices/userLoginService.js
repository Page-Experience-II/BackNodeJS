const User = require('../../models/User');
const utils = require('../../utils/utils');
const AccessToken = require('../../class/accessTokenClass');

async function userLogin(data, res) {
    const accessTokenDao = new AccessToken();

    User.find({
        "email": userInfo.email
    })
        .exec()
        .then(async usrOne => {
            const token = await accessTokenDao.generateToken(userInfo.googleId, usrOne[0]._id);
            const accessTokenValue = await accessTokenDao.saveTokenAndGetAccessToken(token, usrOne[0]._id);
            const basedAccesstoken = await accessTokenDao.generateToken(accessTokenValue, usrOne[0]._id);

            res.status(200).json({
                token: basedAccesstoken,
                userId: usrOne[0]._id,
                imageUrl: usrOne[0].imageUrl,
                fullname: usrOne[0].fullname,
                dateOfCreation: usrOne[0].dateOfCreation
            })

        })
        .catch(err => utils.defaultError(res, err))
}

module.exports = {
    userLogin
}