let fn_login = async (ctx, next) => {


  ctx.set("Content-Type", "application/json");
  let body = ctx.request.body;
  let { name, password } = body;
  console.log(ctx);
  ctx.body = ctx;


};

module.exports = {
  'POST /api/login': fn_login
};