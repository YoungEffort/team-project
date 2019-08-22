const Koa = require('koa');
const app = new Koa();
const config = require('./config');
const errorHandle = require('./middleware/errorHandle');

const router = require('./router');
const connection = require('./mysql');
connection.connect();

const jwt = require('koa-jwt');
let bodyParser = require('koa-bodyparser');

app
  .use(errorHandle)
  .use(
    jwt({ secret: config.secret }).unless({
      path: [/\/get/, '/api/user/login','/api/user/register']
    })
  )
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => {
  console.log('The serve is starting at port 3000');
});
