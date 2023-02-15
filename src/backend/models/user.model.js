// var mysql = require('mysql');
import mysql from 'mysql'
var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Teju@2411",
  database: "gvsuConnect"
});

const userModel = {}
userModel.verifyLogin = function(handlers) {
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM users where username = '" + handlers.username + "'", function (err, result) {
            if(!err) {
                handlers.success(data);
            } else {
                handlers.error(err);
            }
        });
      });
}

export default userModel;
// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });