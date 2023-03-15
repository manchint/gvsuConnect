import {executeQuery} from '../common.js'

const userModel = {}


var onFetchUsernameSuccessCallBack =  function(data, password) {
    var bytes  = CryptoJS.AES.decrypt(password, 'my password');
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    if(data.length === 0) {
        var response = {msg: "User not found"}
    }
    else if(data[0].password != originalText) {
        var response = {msg: "Login failed"}
    } else {
        var response = {status: "Success"}
    }
    return response;
}



userModel.verifyLogin = function(handlers) {
    const query = "SELECT * FROM users where username = '" + handlers.username + "'";
    executeQuery(query, onFetchUsernameSuccessCallBack(handlers.success, handlers.password), handlers.error);
}

userModel.addUser = function(handlers) {
    const query ="INSERT INTO users VALUES ('" + handlers.username + "' , '" + handlers.fname + "' , '" + handlers.lname + "' , '" + handlers.email + "' , '" + handlers.password + "' , '234242e')";
    executeQuery(query, handlers.success, handlers.error);
}

export default userModel;