const contentService = require('../services/contentService/index');

createNewContent = (req, res, next) => {
    contentService.createNewContentService.createNewContent(req, req.body, res)
}

getAllContents = (req, res, next) => {
    let limit = req.params.limit;
    let page = req.params.page;

    contentService.getAllContentService.getAllContent(res, page, limit)
}

module.exports = {
    getAllContents,
    createNewContent
}