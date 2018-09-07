const { mysql  } = require('../qcloud')
 

module.exports = async (ctx, next) => {
  // 通过 Koa 中间件进行登录态校验之后
  // 登录信息会被存储到 ctx.state.$wxInfo
  // 具体查看：
  await mysql.select().from('essay').then(function(data) {
    ctx.body = data;
  });
}
