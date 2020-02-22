const contentService = require('../services/contentService/index');

createNewContent = (req, res, next) => {
    contentService.createNewContentService.createNewContent(req.body.data, res)
}

module.exports = {
    createNewContent
}