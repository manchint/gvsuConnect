import {executeQuery} from '../common.js'

const postsModel = {}
postsModel.getAllPosts = function(handlers) {
    const query = "SELECT * FROM posts where category = '" + handlers.category + "'";
    executeQuery(query, handlers.success, handlers.error);
}

postsModel.addPost = function(handlers) {
    let query = "";
    if ( handlers.category === "general") {
        query ="INSERT INTO posts (username, post_msg, category) VALUES ('" + handlers.username + "' , '" + handlers.postMsg + "' , '" + handlers.category +"')";
    }
    
    executeQuery(query, handlers.success, handlers.error);
}

postsModel.getAllComments = function(handlers) {
    const query = "SELECT * FROM comments where post_id = '" + handlers.post_id + "'";
    executeQuery(query, handlers.success, handlers.error);
}


export default postsModel;