//for all the functions
const { v4: uuidv4 } = require('uuid');

let users = [];

const createUser = (req,res)=>{
    const user = req.body;
    users.push({ ...user, id: uuidv4()})
    res.send(`User with the username ${user.firstName} added to the database!`);
}

const getUser =  (req, res) => {
    try {
        res.json(users);
    } catch (error) {
        // Log the error and send an error response
        console.error('Error while sending response:', error);
        res.status(500).send('Internal Server Error');
    }
};

const findUser = (req,res)=>{
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
};

const deleteUser = (req,res)=>{
    const { id } = req.params;

    //We will delete user with the given id and remaining will be in users only.
    users = users.filter((user) => user.id !== id);
    res.send(`User with the id ${id} deleted from the database.`);
};

const updateUser = (req,res)=>{
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find((user)=> user.id === id);

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`User with the id ${id} has been updated`);
};

module.exports ={
    getUser,
    createUser,
    findUser,
    deleteUser,
    updateUser,
    users
};