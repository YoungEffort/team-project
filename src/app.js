const Koa = require('koa');
const app = new Koa();

const router = require('./router');
const connection = require('./mysql');
connection.connect()

let bodyParser = require('koa-bodyparser');

app.use(bodyParser()).use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log('The serve is starting at port 3000');
});
