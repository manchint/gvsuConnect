import mysql from 'mysql'



const commons = {}
commons.con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Teju@2411",
    database: "gvsuConnect"
});
// commons.connectMySQL = function() {
//     con.connect(function(err) {
//         if (err) throw err;
//         else {console.log("connection established"); commons.con = con;}
//     })
// }

export default commons;