const tech = require('../models/tech');

module.exports = {
  queryList: async function(params) {
    if (!params.state) {
      let response1 = await tech.queryList('已沉淀');
      let response2 = await tech.queryList('进行中');
      let response3 = await tech.queryList('预研中');
      let response4 = await tech.queryList('设想中');
      let response = [
        { techName: '已沉淀', techList: response1 },
        { techName: '进行中', techList: response2 },
        { techName: '预研中', techList: response3 },
        { techName: '设想中', techList: response4 }
      ];
      return { code: '200', data: response, msg: '' };
    }
  }
};
