const contentService = require('../services/contentService/index');

createNewContent = (req, res, next) => {
    contentService.createNewContentService.createNewContent(req, req.body.data, res)
}

module.exports = {
    createNewContent
}