const techstack = require('../../mysqlHelper/techstack');

module.exports = {
  queryList: async function(ctx) {
    ctx.set('Content-Type', 'application/json');
    const response = await techstack.queryList(ctx.request.query);
    ctx.body = response;
  }
};
