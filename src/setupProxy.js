const proxy = require("http-proxy-middleware");


  module.exports = function(app) {  
    app.use(proxy("/api", 
    { target: "https://kiprono123456.pythonanywhere.com/", changeOrigin: true, "secure": false, "logLevel": "debug"}));
  };

