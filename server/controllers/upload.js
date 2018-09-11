const { uploader } = require('../qcloud')

module.exports = async ctx => {
    // 获取上传之后的结果
    // 具体可以查看：
    console.log('上传接口********');
    const data = await uploader(ctx.req)
    ctx.state.data = data
}
