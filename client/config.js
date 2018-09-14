/**
 * 小程序配置文件
 */

// 此处主机域名修改成腾讯云解决方案分配的域名

 //  开发环境
  //var host = 'https://4ka9f4kc.qcloud.la';
 // 线上环境
 var host = 'https://730139795.no-forget.cn';
// 本地环境
 //var host ='http://localhost:5757';

var config = {

    // 下面的地址配合云端 Demo 工作
    service: {
        host,

        // 登录地址，用于建立会话
        loginUrl: `${host}/weapp/login`,

        // 测试的请求地址，用于测试会话
        requestUrl: `${host}/weapp/user`,

        // 测试的信道服务地址
        tunnelUrl: `${host}/weapp/tunnel`,

        // 上传图片接口
        uploadUrl: `${host}/weapp/upload`,
        // 获取文章列表
       getEasayList: `${host}/weapp/getEasayList`,
       // 增加一条信息
       addEasay:`${host}/weapp/addEasay`, 
    }
};

module.exports = config;
