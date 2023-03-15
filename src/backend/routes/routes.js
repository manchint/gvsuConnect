import userModel from '../models/user.model.js';
import postsModel from '../models/posts_model.js';
import cryptoJs from 'crypto-js';

const router = (app) => {
    app.get("/", (request, response) => {
		response.send({
			message: "Home API",
		});
	});
	app.get("/login", (req, res) => {
		userModel.verifyLogin({success:function(data){res.status(200).send(data)},
								error:function(err){res.send(err)},
								username: req.body.data.username,
								password: req.body.data.password
							});
	});

	app.get("/signup", (req, res) => {
		userModel.addUser({success:function(data){res.status(200).send(data)},
								error:function(err){res.send(err)},
								username: req.body.data.username,
								fname: req.body.data.fname,
								lname: req.body.data.lname,
								email: req.body.data.email,
								password: req.body.data.password});
	});
	app.get("/getposts", (req, res) => {
		postsModel.getAllPosts({success:function(data){res.status(200).send(data)},
								error:function(err){res.send(err)}})
	});

	app.get("/getposts", (req, res) => {
		postsModel.getAllPosts({success:function(data){res.status(200).send(data)},
								error:function(err){res.send(err)},
								user : req.body.data.username
							})
	});
};


// Export the router 
export default router;