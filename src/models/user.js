const connection = require('../mysql').connection;

module.exports = {
  register: function(params) {
    let sql =
      'INSERT INTO auth_login(id,login_name,password,create_time,last_login_time) VALUES(0,?,?,?,?)';
    var sqlParams = [
      params.loginName,
      params.password,
      new Date(),
      new Date()
    ];
    connection.query(sql, sqlParams, function(err, result) {
      if (err) {
        console.log('[INSERT ERROR] - ', err.message);
        return;
      }

      console.log(
        '--------------------------INSERT----------------------------'
      );
      //console.log('INSERT ID:',result.insertId);
      console.log('INSERT ID:', result);
      console.log(
        '-----------------------------------------------------------------\n\n'
      );
    });
  }
};
