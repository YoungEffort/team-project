const Koa = require('koa');
const app = new Koa();

const router = require('./router');
const connection = require('./db/connect');
connection.connect()

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log('The serve is starting at port 3000');
});
