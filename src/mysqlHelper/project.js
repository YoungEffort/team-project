const project = require('../models/project');

module.exports = {
  queryList: async function(params) {
    let response = await project.queryList();
    let data = [];
    let newData = Array.from(new Set(response.map(item => item.login_name)));
    newData.forEach(e => {
      data.push({ name: e, list:response.filter(item => item.login_name === e) });
    });
    return { code: '200', data: data, msg: '' };
  }
};
