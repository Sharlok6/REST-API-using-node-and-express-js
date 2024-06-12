//for routing
const express = require('express');
const router = express.Router();
const {getUser, createUser,findUser,deleteUser,updateUser} = require('../controllers/users');

router.get('/',getUser);

//post method to send data to server side from client
router.post('/',createUser);

//This is to fetch a particular user
//This semicolon means anything can be in url after localhost:5000/users/...(anything)
router.get('/:id',findUser);

//deleting a user
router.delete('/:id',deleteUser);

//updating a user
router.patch('/:id',updateUser);

module.exports = router;

//there are two types of syntaxes-> CommonJs and ES module syntices