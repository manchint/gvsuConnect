import userModel from '../models/user.model.js';
import postsModel from '../models/posts.model.js';
import messagesModel from '../models/messages.model.js';
import multer from 'multer';

import cryptoJs from 'crypto-js';
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
  });
const upload = multer({ storage: storage });
const multipleUpload = upload.fields([{name: "file1"}])
const router = (app) => {
    app.get("/", (request, response) => {
		response.send({
			message: "Home API",
		});
	});
	app.post("/login", (req, res) => {
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

	app.post("/getChatUsers", (req, res) => {
		userModel.getChatUsers({success:function(data){res.status(200).send(data)},
								error:function(err){res.send(err)},
								from: req.body.from,
							});
	});
	app.post("/getposts", (req, res) => {		
		postsModel.getAllPosts({success:function(data){res.status(200).send(data)},
								error:function(err){res.send(err)},
								category : req.body.category
							})
	});
	app.post("/addPost", upload.single('images'), (req, res) => {
		//console.log(req.file.filename)
		postsModel.addPost({success:function(data){res.status(200).send(data)},
								error:function(err){res.send(err)},
								username : req.body.username,
								postMsg : req.body.post_msg,
								name : req.file.filename,
								category : req.body.category
							})
	});

	app.post("/getComments", (req, res) => {
		postsModel.getAllComments({success:function(data){res.status(200).send(data)},
								error:function(err){res.send(err)},
								post_id : req.body.post_id
							})
	});
	app.post("/addComment", (req, res) => {
		postsModel.addComment({success:function(data){res.status(200).send(data)},
								error:function(err){res.send(err)},
								post_id : req.body.post_id,
								comment_user: req.body.comment_user,
								msg: req.body.msg
							})
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