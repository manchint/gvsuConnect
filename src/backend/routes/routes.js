//IMPORTING MODELS
// const userModel = require('../models/user.model');

import userModel from '../models/user.model.js'
import commons from '../common.js'
const router = (app) => {
    app.get("/", (request, response) => {
		response.send({
			message: "Home API",
		});
	});
	// commons.connectMySQL();
	app.get("/login", (req, res) => {
		userModel.verifyLogin({success:function(data){res.status(200).send(data)},
								error:function(err){res.send(err)},
								username:'test'
							});
	});

	app.get("/signup", (req, res) => {
		userModel.addUser({success:function(data){res.status(200).send(data)},
								error:function(err){res.send(err)},
								username:'test1',
								fname:'john',
								lname:'doe',
								email:'john.doe@mail.gvsu.edu',
								password: 'Test@34214678'});
	});
};


// Export the router 
export default router;