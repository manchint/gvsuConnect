// Import packages and set the port 
import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/routes.js";

const port = 3001;
const app = express();


// Use Node.js body parsing middleware 
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
		extended: true,
	})
);

routes(app);

const users = [
    {
      id: 1,
      name: "Richard Hendricks",
      email: "richard@piedpiper.com",
    },
    {
      id: 2,
      name: "Bertram Gilfoyle",
      email: "gilfoyle@piedpiper.com",
    },
  ];

const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
	console.log(`Server listening on port ${server.address().port}`);
});



//ADDING ROUTES
app.get("/users", (request, response) => {
    response.send(users);
});