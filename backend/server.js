// environment variables
require("dotenv").config();

// express
const express = require("express");
const app = express();

// middleware

//logs the requests
app.use((req, res, next) => {
	console.log(req.method, req.path);
	next();
});

// root
app.get("/", (req, res) => {
	res.json({ msg: "Welcome to the app." });
});

// listen for requests
app.listen(process.env.PORT, () => {
	console.log(`http://localhost:${process.env.PORT}`);
});
