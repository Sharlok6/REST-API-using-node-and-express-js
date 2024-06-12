const express = require('express');
const bodyParser = require('body-parser');
const User = require('./routes/users');
const path = require('path');

const app = express();
const PORT = 5000;

//middleware, json stands for javascript object notation, which is a common for sending
//and requesting data
app.use(bodyParser.json());

// //creating routes
app.get('/',(req,res)=>{
    res.send("Hello from Homepage");
});

//setting routes
app.use('/users',User);

// // Serve static files from the 'public' directory
// app.use(express.static('public'));

// // Serve index.html on the homepage
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
//     console.log("Hello from homepage");
// });

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});

//Project main work
//1. get -> /users = finds all users
//2. post -> /users = creates a user
//3. get -> /users/:id = finds user details
//4. delete-> /users/:id = deletes a user
//5. patch /users/:id = updates a user