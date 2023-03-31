import {executeQuery} from '../common.js'

const userModel = {}
import cryptoJs from 'crypto-js';

const onFetchUsernameSuccessCallBack =  function(data, password, successCallback) {
    //var originalText  = cryptoJs.AES.decrypt(password, 'mypassword').toString;
    if(data.length === 0) {
        var response = {msg: "User not found"}
    }
    else if(data[0].password != password) {
        successCallback({msg: "Login failed"})
    } else {
        successCallback({status: "Success"})
    }
}



userModel.verifyLogin = function(handlers) {
    const query = "SELECT * FROM users where username = '" + handlers.username + "'";
    executeQuery(query, (data) => onFetchUsernameSuccessCallBack(data, handlers.password, handlers.success), handlers.error);
}

userModel.addUser = function(handlers) {
    const query ="INSERT INTO users VALUES ('" + handlers.username + "' , '" + handlers.fname + "' , '" + handlers.lname + "' , '" + handlers.email + "' , '" + handlers.password + "' , '234242e')";
    executeQuery(query, handlers.success, handlers.error);
}

userModel.getChatUsers = function(handlers) {
    const query = "SELECT from_user FROM gvsuConnect.messages where from_user = '"+handlers.from+ "' union SELECT from_user FROM gvsuConnect.messages where to_user = '" + handlers.from + "'";
    executeQuery(query, handlers.success, handlers.error);
}

export default userModel;