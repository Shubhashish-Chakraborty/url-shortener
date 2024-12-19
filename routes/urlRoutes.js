const { Router } = require("express");

const { shortenUrl , redirectUrl } = require('../controllers/urlController');

const urlRouter = Router();


// API to shorten URL
urlRouter.post('/shorten', shortenUrl);

// API to redirect to original URL
urlRouter.get('/:urlCode', redirectUrl);


module.exports = {
    urlRouter: urlRouter
}