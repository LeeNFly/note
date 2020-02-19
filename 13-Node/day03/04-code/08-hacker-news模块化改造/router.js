var handler = require('./handler');

module.exports = function (req, res) { 
    if (req.url == "/index" || req.url == "/") {
        handler.indexHandler(req, res);
    } else if (req.urlObj.pathname == "/details") {
        handler.detailsHandler(req, res);
    } else if (req.url == "/submit") {
        handler.submitHandler(req, res);   
    } else if (req.url.indexOf('/resources') == 0) {
        handler.staticHandler(req, res);
    } else if (req.urlObj.pathname == "/add") {
        handler.addHandler(req, res);
    } else {
        handler.notFoundHandler(req, res);
    }
}