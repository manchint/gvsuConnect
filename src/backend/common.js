import mysql from 'mysql'

const pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "Teju@2411",
    database: "gvsuConnect"
});
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
}
