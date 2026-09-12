const express = require('express');
const mongoose = require('mongoose');
const Student = require('./models/Student');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/studentDB')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Configuration
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// HOME ROUTE
app.get('/', async (req, res) => {
    const students = await Student.find();

    res.render('apphome', {
        students: students
    });
});


// ADD STUDENT
app.post('/students', async (req, res) => {

    try {

        const student = new Student({
            name: req.body.name,
            email: req.body.email,
            course: req.body.course
        });

        await student.save();

        res.redirect('/');

    } catch (error) {

        res.status(500).send(error.message);

    }

});


// DELETE STUDENT
app.delete('/students/:id', async (req, res) => {

    try {

        await Student.findByIdAndDelete(req.params.id);

        res.json({
            success: true
        });

    } catch (error) {

        res.status(500).json({
            success: false
        });

    }

});


// START SERVER
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
