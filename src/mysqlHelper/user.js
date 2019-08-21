const user = require('../models/user');
const jwt = require('jsonwebtoken');

module.exports = {
  register: async function(params) {
    if (!params.loginName) {
      console.log('用户名不能为空');
      return { code: '500', msg: '用户名不能为空' };
    }
    if (!params.password) {
      console.log('密码不能为空');
      return { code: '500', msg: '密码不能为空' };
    }
    let queryUser = await user.infoRegister(params);
    if (queryUser.length == 0) {
      let response = await user.register(params);
      return { code: '200', msg: '注册成功' };
    }
    return { code: '500', msg: '用户已存在，注册失败' };
  },
  login: async function(params) {
    if (!params.loginName) {
      console.log('用户名不能为空');
      return { code: '500', data:null,msg: '用户名不能为空' };
    }
    if (!params.password) {
      console.log('密码不能为空');
      return { code: '500', data:null,msg: '密码不能为空' };
    }
    let result = await user.infoLogin(params);
    if (result.length != 0) {
      let data=result[0]
      const token=jwt.sign({
        name:data.login_name
      },'my_token',{expiresIn: '2h'})
      return { code: '200',data:token, msg: '登录成功' };
    }
    return { code: '500',data:null, msg: '用户不存在，登录失败' };
  }
};
