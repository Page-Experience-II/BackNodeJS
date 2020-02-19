const UserDao = require('../../daos/userDao/userDao');


async function isCodeValid (data, res) {
    console.log("isCodeValid service !", data);
    // check if code exists
    if (await UserDao.ifExistEmailValidatedByCodeFullname(data)) {
        res.status(200).json({
            success: true,
            data: {
                valid: true
            },
            code: 200
        })
    } else {
        res.status(200).json({
            success: true,
            data: {
                valid: false
            },
            code: 200
        })
    }

}

module.exports = {
    isCodeValid
}