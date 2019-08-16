const Router = require('koa-router');
const user = require('../controller/userController');

let router = new Router();
router
    .post('/api/user/register',user.register)
    .post('/api/user/login',user.login);

module.exports = router;
