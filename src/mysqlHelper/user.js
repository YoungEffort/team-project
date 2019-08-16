const user = require('../models/user');

module.exports = {
  register: async function(params) {
    if (!params.loginName ) {
      console.log('用户名不能为空')
      return { msg: '用户名不能为空' };
    }
    if (!params.password ) {
      console.log('密码不能为空')
      return { msg: '密码不能为空' };
    }
    let response = await user.register(params);
    return {msg: '注册成功'};
  }
};
