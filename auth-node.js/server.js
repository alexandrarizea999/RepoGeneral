const express = require('express')  // Importing the Express framework
const app = express()               // Creating an instance of Express
const bcrypt = require('bcrypt')    // Importing the bcrypt library for hashing passwords

app.use(express.json()) // Middleware to parse incoming JSON requests

const users = []        // Array to store users

// Route to get the list of users
app.get('/users', (req, res) => {
    res.json(users) // Respond with the users array in JSON format
})

// Route to create a new user
app.post('/users', async (req, res) => {
    try{
        // The bigger the number, the longer it takes
        // to generate the hash
        const salt = await bcrypt.genSalt() // Generate a salt for hashing
        const hashedPassword = await bcrypt.hash(req.body.password, salt) // Hash the password with the generated salt
        // console.log(salt)
        // console.log(hashedPassword)

        const user = {name: req.body.name, password: hashedPassword} // Create a new user object
        users.push(user) // Add the new user to the users array
        req.status(201).send() // Respond with status 201 (Created)
    } catch {
        res.status(500).send() // Respond with status 500 (Internal Server Error) if there's an error
    }
})

// Route to login a user
app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.name === req.body.name) // Find the user by name
    if(user === null){
        return res.status(400).send('Cannot find user') // Respond with status 400 (Bad Request) if user not found
    }
    try {
        if(await bcrypt.compare(req.body.password, user.password)){ // Compare the hashed password with the one provided
            res.send('Succes!✅') // If passwords match, respond with success
        } else {
            res.send('Not allowed!⛔') // If passwords don't match, respond with not allowed
        }
    } catch {
        res.status(500).send() // Respond with status 500 (Internal Server Error) if there's an error
    }
})

app.listen(3000) // Start the server on port 3000
