const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

// Configure EJS
app.set('view enginne', 'ejs');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Maintain Sessions
app.use(session({
    secret: 'my-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000
    }
}));
// Middleware to protect private routes
const authMiddleware = (req, res, next) => {

    if (req.session.isLoggedIn) {
        next(); // User is authenticated
    } else {
        res.redirect('/login');
    }
};

// Public Route: Login Page
app.get('/login', (req, res) => {

    res.render('login', {
        error: null
    });

});

// Implement Login
app.post('/login', (req, res) => {

    const { username, password } = req.body;

    // Hardcoded username and password
    if (username === 'admin' && password === '123') {

        // Store login information in session
        req.session.isLoggedIn = true;
        req.session.username = username;

        // Create a cookie
        res.cookie(
            'lastVisit',
            new Date().toLocaleString()
        );

        // Go to dashboard
        res.redirect('/dashboard');

    } else {

        res.render('login', {
            error: 'Invalid credentials!'
        });

    }

});

// Private Route: Dashboard
app.get('/dashboard', authMiddleware, (req, res) => {

    // Read cookie
    const lastVisit = req.cookies.lastVisit || 'First time!';

    // Display session and cookie data
    res.render('dashboard', {

        user: req.session.username,
        lastVisit: lastVisit

    });

});

// Implement Logout
app.get('/logout', (req, res) => {

    req.session.destroy(() => {

        // Clear session cookie
        res.clearCookie('connect.sid');

        // Go back to login
        res.redirect('/login');

    });

});

// Start server
app.listen(3000, () => {

    console.log('Server running at http://localhost:3000/login');

});
