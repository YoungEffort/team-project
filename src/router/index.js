const Router = require('koa-router');
const user = require('../controller/userController');
const techstack = require('../controller/techstackController');
const project = require('../controller/projectController');

let router = new Router();
router
  .post('/api/user/register', user.register)
  .post('/api/user/login', user.login)
  .get('/api/get/techstack/querylist', techstack.queryList)
  .get('/api/get/project/querylist', project.queryList)

module.exports = router;
