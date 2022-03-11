const express = require('express');
const app = express()
const { pool } = require("./dbConfig");

const PORT = process.env.PORT || 4000;




app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render("index")
});

app.get('/user/register', (req, res) => {
    res.render("register");
});

app.get('/user/login', (req, res) => {
    res.render("login");
});

app.get('/user/dashboard', (req, res) => {
    res.render("dashboard", {user: "Chris"});
});

app.post('/user/register', (req, res) => {
    let { name, email, password, password2 } = req.body;

    console.log ({
        name,
        email,
        password,
        password2
    });

    let errors = [];
    
    if (!name || !email || !password || !password2) {
        errors.push({message: 'Please enter all fields'});

    }



    if ( password != password2) {
        errors.push({ message: "Passwords do not match"});
    }

    if ( errors.length > 0) {
        res.render("register", {errors});
    }

});

app.listen(PORT, () => {
    console.log("Server running on port ${PORT}");
});