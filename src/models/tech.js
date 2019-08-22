const connection = require('../mysql').connection;

module.exports = {
  queryList: function(params) {
    return new Promise(resolve => {
      let sql = 'SELECT * FROM tech_stack WHERE state="' + params + '"';
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
