import userModel from '../models/user.model.js';
import postsModel from '../models/posts.model.js';
import messagesModel from '../models/messages.model.js';

import cryptoJs from 'crypto-js';

const router = (app) => {
    app.get("/", (request, response) => {
		response.send({
			message: "Home API",
		});
	});
	app.post("/login", (req, res) => {
		console.log(req.body)
		userModel.verifyLogin({success:function(data){res.status(200).send(data)},
								error:function(err){res.send(err)},
								username: req.body.username,
								password: req.body.password
							});
	});

	app.post("/signup", (req, res) => {
		userModel.addUser({success:function(data){res.status(200).send(data)},
								error:function(err){res.send(err)},
								username: req.body.username,
								fname: req.body.fname,
								lname: req.body.lname,
								email: req.body.email,
								password: req.body.password});
	});
	app.post("/getposts", (req, res) => {
		postsModel.getAllPosts({success:function(data){res.status(200).send(data)},
								error:function(err){res.send(err)}})
	});

	app.post("/getmessages", (req, res) => {
		messagesModel.getAllMessages({success:function(data){res.status(200).send(data)},
								error:function(err){res.send(err)},
								from : req.body.from,
								to : req.body.to
							})
	});

	app.post("/sendmessage", (req, res) => {
		messagesModel.sendMessage({success:function(data){res.status(200).send(data)},
								error:function(err){res.send(err)},
								from : req.body.from,
								to : req.body.to,
								msg: req.body.msg
							})
	});
};


// Export the router 
export default router;