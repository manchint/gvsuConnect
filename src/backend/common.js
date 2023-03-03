import mysql from 'mysql'

const pool = mysql.createPool({
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

export function executeQuery(query , success, error){
    pool.getConnection(function(err, connection){    
        //run the query
        connection.query(query,  function(err, rows){
          if(err) error(err);
          else {
              console.log(rows);
              success(rows)
          }
        });
         
        connection.release();//release the connection
      });
    // pool.query(query, (err, res, fields)=>{
    //     if(err) throw err;
    //     console.log('The solution is: ', res[0].solution);
    //   });
      
    //   pool.getConnection((err, con)=>{
      
    //     // Use the connection
    //     con.query(query, (err, res, fields)=>{
    //       console.log(res[0]);
    //       con.release(); //done with the connection, free memory
      
    //       // Handle error after the release
    //       if(err) throw error;
      
    //       // Don't use the connection here, it has been returned to the pool.
    //     });
    //   });      
}
