const connection = require('./connect').connection;

module.exports = function() {
  let sql = 'SELECT * FROM auth_login';
  connection.query(sql, function(err, result) {
    if (err) {
      console.log('[SELECT ERROR] - ', err.message);
      return;
    }

    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log(
      '------------------------------------------------------------\n\n'
    );
  });
};
