const { selectEasayLustData } = require('../service/easayModel.js');
module.exports = async (ctx, next) => {
  const result = await selectEasayLustData()
  ctx.body = result;
}
