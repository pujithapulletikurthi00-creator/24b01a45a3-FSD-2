import express from "express";

const app = express();
const PORT = 3001;

// Configure EJS
app.set("view engine", "ejs");

// Enable form data
app.use(express.urlencoded({ extended: true }));

// Home page
app.get("/", (req, res) => {
    res.render("index", {
        error: "",
        message: ""
    });
});

// Handle feedback submission
app.post("/submit", (req, res) => {

    const name = req.body.name;
    const feedback = req.body.feedback;

    // Check name
    if (!name || name.trim().length < 3) {
        return res.render("index", {
            error: "Please enter a name with at least 3 characters.",
            message: ""
        });
    }

    // Check feedback
    if (!feedback || feedback.trim() === "") {
        return res.render("index", {
            error: "Feedback cannot be empty.",
            message: ""
        });
    }

    // Successful submission
    res.render("index", {
        error: "",
        message: `Thanks, ${name}! Your feedback has been received.`
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Feedback server started on http://localhost:${PORT}`);
});
