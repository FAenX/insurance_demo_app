import proxy from "http-proxy-middleware";

module.exports = function(app) {
        app.use(proxy('/api/**', { target: "http://3.15.240.44/" }));
 };