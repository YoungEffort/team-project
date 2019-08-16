const mysql = require('mysql');
const database = require('../config').database;

let connection = mysql.createConnection(database);
module.exports = {
  connect: function() {
    connection.connect(function(err) {
      if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }

      console.log('connected as id ' + connection.threadId);
    });
    return connection;
  },
  connection: connection
};
