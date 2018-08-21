module.exports = ctx => {
  console.log(ctx);
  
  ctx.state.data = {
      msg: 'Hello World'
  }
}