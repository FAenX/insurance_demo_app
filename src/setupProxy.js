const proxy = require('http-proxy-middleware');

module.exports = function(app) {
        app.use(proxy('/', { target: "http://3.15.240.44/" }));
 };