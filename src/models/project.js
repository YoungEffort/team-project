const connection = require('../mysql').connection;

module.exports = {
  queryList: function(params) {
    return new Promise(resolve => {
      let sql = 'SELECT user_id,login_name,p_name FROM auth_project a LEFT JOIN project b ON a.pid=b.id LEFT JOIN auth_login c ON a.user_id=c.id';
      connection.query(sql, function(err, result) {
        if (err) {
          console.log('[INSERT ERROR] - ', err.message);
          return;
        }

        console.log(
          '--------------------------SELECT----------------------------'
        );
        console.log(result);
        resolve(result);
        console.log(
          '------------------------------------------------------------\n\n'
        );
      });
    });
  }
};