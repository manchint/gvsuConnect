import {executeQuery} from '../common.js'
import mysql from 'mysql'

const postsModel = {}

postsModel.getAllPosts = function(handlers) {
    const pool = mysql.createPool({
        host: "127.0.0.1",
        user: "root",
        password: "Teju@2411",
        database: "gvsuConnect"
    });
    pool.getConnection(function(err, connection){    
        //run the query
        let query = "SELECT * FROM posts where category = '" + handlers.category + "'";
        connection.query(query,  function(err, rows){
          if(err) handlers.error(err);
          else {
                rows.map((post, idx) => {
                    query = "SELECT * FROM comments where post_id = '" + post.post_Id + "'";
                    connection.query(query,  function(err, comments){
                        if(err) handlers.error(err);
                        else if(idx === rows.length -1 ) {
                            rows[idx]["comments"] = comments;
                            rows.map((post, idx) => {
                                query = "SELECT data FROM images where post_id = '" + post.post_Id + "'";
                                connection.query(query,  function(err, images){
                                    if(err) handlers.error(err);
                                    else {
                                        var imageData = []
                                        if(images.length > 0) {
                                            images.map((image, index) => {
                                                imageData.push(image.data)
                                                if(index === images.length - 1) { rows[idx]["images"] = imageData; }
                                            })
                                        } else {
                                            rows[idx]["images"] = imageData;
                                        }
                                        
                                    }
                                    if(idx === rows.length -1 ) {
                                        handlers.success(rows)
                                    }
                                  });
                            })
                        }
                        else {
                            rows[idx]["comments"] = comments;
                        }
                      });
                })
                
          }
        });
        connection.release();//release the connection
    });      
}


 
postsModel.addPost = function(handlers) {
    let query = "";
    if ( handlers.category === "general") {
        query ="INSERT INTO posts (username, post_msg, category) VALUES ('" + handlers.username + "' , '" + handlers.postMsg + "' , '" + handlers.category +"')";
    }
    const addImages = (res) => {
        console.log("adding Images", res.insertId);
        handlers.images.map((image, idx) => {
            query = "INSERT INTO images (data, post_id) VALUES ('" + image + "', '" + res.insertId +"')";
            console.log("query", query);
            executeQuery(query, (data) => {
                if(idx === handlers.images.length -1 ) {handlers.success({msg: "Post added successfulyy..."})}
            }, handlers.error);
        })
        
    }
    executeQuery(query, (data) => addImages(data), handlers.error);
}

postsModel.getAllComments = function(handlers) {
    const query = "SELECT * FROM comments where post_id IN (" + handlers.post_id + ")";
    //const query = "SELECT * FROM comments where post_id = '" + handlers.post_id + "'";
    executeQuery(query, handlers.success, handlers.error);
}


export default postsModel;