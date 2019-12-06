let fn_login = async (ctx, next) => {


ctx.set("Content-Type", "application/json")
  ctx.response.body = ctx;
  let body = ctx.request.body;
  let { account, password } = body;
  
    ctx.response.body = null;
 

};

module.exports = {
  'GET /api/login': fn_login
};