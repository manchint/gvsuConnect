import {executeQuery} from '../common.js'

const messagesModel = {}
messagesModel.getAllMessages = function(handlers) {
    const query = "SELECT * FROM messages where from_user IN ('" + handlers.from + "' , '" + handlers.to + "') and to_user IN ('" + handlers.to + "' , '" + handlers.from + "') order by ts ASC";
    executeQuery(query, handlers.success, handlers.error);
}

messagesModel.sendMessage = function(handlers) {
    const query ="INSERT INTO messages (from_user, to_user,msg) VALUES ('" + handlers.from + "' , '" + handlers.to + "' , '" + handlers.msg + "')";
    console.log(query)
    executeQuery(query, handlers.success, handlers.error);
}

export default messagesModel;