"use strict";
const express = require("express");
const app = express();
const PORT = 4000;
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the Student Management API!",
        status: "Running",
        timestamp: new Date()
    });
});
app.get("/courses", (req, res) => {
    const courseList = [
        { id: 201, name: "Python Programming", duration: "3 Months" },
        { id: 202, name: "Web Development", duration: "4 Months" },
        { id: 203, name: "Machine Learning", duration: "5 Months" }
    ];
    res.json(courseList);
});
app.get("/book/:id", (req, res) => {
    const bookId = req.params.id;
    res.json({
        requestedId: bookId,
        title: "Learning JavaScript",
        available: true,
        categories: ["Programming", "Technology"]
    });
});
app.listen(PORT, () => {
    console.log(`API Server is running at http://localhost:${PORT}`);
});
