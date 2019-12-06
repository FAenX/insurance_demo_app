const proxy = require('http-proxy-middleware');

module.exports = function(app) {
        app.use(proxy('/api/v1/**', { target: "http://3.15.240.44/" }));
 };