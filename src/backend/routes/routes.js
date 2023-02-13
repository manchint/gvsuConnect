const router = (app) => {
    app.get("/", (request, response) => {
		response.send({
			message: "Node.js and Express REST API",
		});
	});
};


// Export the router 
export default router;