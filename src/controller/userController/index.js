const user = require('../../mysqlHelper/user');

module.exports = {
  register: async function(ctx) {
    ctx.set('Content-Type', 'application/json');
    const response = await user.register(ctx.request.body);
    ctx.body = response;
  },
  login: async function(ctx) {
    ctx.set('Content-Type', 'application/json');
    const response = await user.login(ctx.request.body);
    ctx.body = response;
  }
};
