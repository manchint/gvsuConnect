//IMPORTING MODELS
// const userModel = require('../models/user.model');

import userModel from '../models/user.model.js'
const router = (app) => {
    app.get("/", (request, response) => {
		response.send({
			message: "Home API",
		});
	});

	app.get("/login", (req, res) => {
		userModel.verifyLogin({success:function(data){res.status(200).send(data)},
								error:function(err){res.send(err)},
								username:'test'});
	});
};


// Export the router 
export default router;