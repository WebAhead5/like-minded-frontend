const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {


    app.use(createProxyMiddleware("/auth/**", { target: "http://localhost:5000/" }));

    app.use(
        "/api",
        createProxyMiddleware({
            target:"https://like-minded-api.herokuapp.com/",
            pathRewrite: {
                "^/api": "/",
            },
            changeOrigin: true,
            secure:false

        })
    );


};