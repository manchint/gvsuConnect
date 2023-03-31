// Import packages and set the port 
import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/routes.js";
import cors from "cors";
// const cors = require('cors');

const port = 3001;
const app = express();


// Use Node.js body parsing middleware 
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
		extended: true,
	})
);
app.use(cors());
app.use(express.static('public'))
app.use('/uploads', express.static('uploads'))
routes(app);

const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
	console.log(`Server listening on port ${server.address().port}`);
});


