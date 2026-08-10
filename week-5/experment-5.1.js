"use strict";

const express = require("express");

const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
    res.send("Hello Students! Welcome to the Express.js Home Page.");
});

app.get("/about", (req, res) => {
    res.send("This web server is created to practice Node.js and Express.js.");
});

app.get("/api/info", (req, res) => {
    res.json({
        status: "success",
        version: "2.0.0",
        message: "Express server is running successfully!"
    });
});

app.listen(PORT, () => {
    console.log(`Server started successfully at http://localhost:${PORT}`);
    console.log(`Press Ctrl+C to stop the server`);
});
