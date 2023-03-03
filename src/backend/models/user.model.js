// var mysql = require('mysql');
// import mysql from 'mysql'
// var con = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "root",
//   password: "Teju@2411",
//   database: "gvsuConnect"
// });
import {executeQuery} from '../common.js'

const userModel = {}
userModel.verifyLogin = function(handlers) {
    const query = "SELECT * FROM users where username = '" + handlers.username + "'";
    executeQuery(query, handlers.success, handlers.error);
    // const con = commons.con
    // con.connect(function(err) {
    //     if (err) throw err;
    //     con.query("SELECT * FROM users where username = '" + handlers.username + "'", function (err, result) {
    //         console.log(result);
    //         con.end();
    //         if(!err) {
    //             handlers.success(result);
    //         } else {
    //             handlers.error(err);
    //         }
    //     });
    // });  
}

userModel.addUser = function(handlers) {
    const query ="INSERT INTO users VALUES ('" + handlers.username + "' , '" + handlers.fname + "' , '" + handlers.lname + "' , '" + handlers.email + "' , '" + handlers.password + "' , '234242e')";
    executeQuery(query, handlers.success, handlers.error);
    // const con = commons.con
    // con.connect(function(err) {
    //     if (err) throw err;
    //     con.query("INSERT INTO users VALUES ('" + handlers.username + "' , '" + handlers.fname + "' , '" + handlers.lname + "' , '" + handlers.email + "' , '" + handlers.password + "' , '234242e')", function (err, result) {
    //         con.end();
    //         if(!err) {
    //             handlers.success(result);
    //         } else {
    //             handlers.error(err);
    //         }
    //     });
    // });
}

export default userModel;