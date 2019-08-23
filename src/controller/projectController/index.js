const project = require('../../mysqlHelper/project');

module.exports = {
  queryList: async function(ctx) {
    ctx.set('Content-Type', 'application/json');
    const response = await project.queryList(ctx.request.query);
    ctx.body = response;
  }
};
