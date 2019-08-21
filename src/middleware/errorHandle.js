module.exports = async (ctx, next) => {
  return next().catch(err => {
    if (err.status === 401) {
      ctx.status = 401;
      ctx.body = {
        code: '401',
        data: null,
        msg: 'Protected resource, use Authorization header to get access\n'
      };
    } else {
      throw err;
    }
  });
};
