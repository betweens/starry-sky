const { insertEasayData } = require('../service/easayModel.js');
module.exports = async (ctx, next) => {
  const params = ctx.request.body;
  console.log(ctx);
  const result = await insertEasayData(params);
  ctx.body = result;
}
