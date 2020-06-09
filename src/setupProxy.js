const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {

    app.use(
        "/api",
        createProxyMiddleware({
            target: "https://like-minded-api.herokuapp.com/",
                pathRewrite: {
                   // ".*" :"/auth/google",
                   "^/api" :"/",
                },
            // secure:false,
            // ws: true,
            changeOrigin: true,
            cookieDomainRewrite: "localhost",
            preserveHeaderKeyCase: true,

        })
    );

    app.use(
        "https://like-minded-api.herokuapp.com/auth/google/successful",
        createProxyMiddleware({
            target: "/",
            pathRewrite: {
                // ".*" :"/auth/google",

            },
            // secure:false,
            // ws: true,
            changeOrigin: true,
            cookieDomainRewrite: "localhost",
            preserveHeaderKeyCase: true,

        })
    );
};