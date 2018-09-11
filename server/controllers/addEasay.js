const { insertEasayData } = require('../service/easayModel.js');
module.exports = async (ctx, next) => {
  const params = ctx.request.body;
  //const { x-wx-skey } = ctx.heade
  const { openId } = ctx.state.$wxInfo.userinfo;
  params.openId = openId;
  const result = await insertEasayData(params);
  ctx.body = result;
}
