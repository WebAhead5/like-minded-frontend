const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {




    app.use(
        "/api",
        createProxyMiddleware({
            target:"https://like-minded-api.herokuapp.com/",
            pathRewrite: {
                "^/api": "",
            },
            changeOrigin: true,

        })
    );


};