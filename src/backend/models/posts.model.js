import {executeQuery} from '../common.js'

const postsModel = {}
postsModel.getAllPosts = function(handlers) {
    const query = "SELECT * FROM users where username = '" + handlers.username + "'";
    executeQuery(query, handlers.success, handlers.error);
}

postsModel.addPost = function(handlers) {
    const query ="INSERT INTO users VALUES ('" + handlers.username + "' , '" + handlers.fname + "' , '" + handlers.lname + "' , '" + handlers.email + "' , '" + handlers.password + "' , '234242e')";
    executeQuery(query, handlers.success, handlers.error);
}

export default postsModel;