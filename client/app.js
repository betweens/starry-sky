//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
    onLaunch: function () {
        const session = qcloud.Session.get();
        console.log(session);
        qcloud.setLoginUrl(config.service.loginUrl)
    }
})