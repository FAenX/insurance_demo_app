const proxy = require("http-proxy-middleware");


  module.exports = function(app) {  
    app.use(proxy("/api/v1/**", 
    { target: "kiprono123456.pythonanywhere.com/", changeOrigin: true, "secure": false, "logLevel": "debug"}));
  };

