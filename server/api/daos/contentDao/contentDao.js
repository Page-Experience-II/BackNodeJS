const Content = require("../../models/Content");
const utils = require('../../utils/utils');

findAllContents = (res) => {
    return new Promise((resolve, reject) => {
        Content.find({
            contentDeleted: false
        }).then(contents => {
            resolve(contents)
        }).catch(err => utils.defaultError(res, err))
    })
}

getAllContentByPageLimit = (res, page, limit) => {
    return new Promise((resolve, reject) => {
        Content.find({
            contentDeleted: false
        }).sort('dateOfCreation')
            .skip(Number(page * limit))
            .limit(Number(limit))
            .exec()
            .then(async contents => {
                let allContents = await findAllContents(res);
                
                resolve({
                    per_page: parseInt(limit),
                    total: allContents.length,
                    total_pages: Math.floor(allContents.length / limit),
                    data: contents,
                })
            }).catch(err => utils.defaultError(res, err))
    })
}

module.exports = {
    findAllContents,
    getAllContentByPageLimit
}