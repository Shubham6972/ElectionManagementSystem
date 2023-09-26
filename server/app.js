const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'});
require('./db/connection')

app.use(express.json());

const Voter = require('./models/userSchema');

app.use(require('./router/auth'))

const PORT = process.env.PORT;

//middleware

const middleware = (req,res,next) =>{
    console.log(`Hello Miidleware`);
    next();

}

// app.get('/' , (req,res) =>{
//     res.send(`Hello Home from Server`)
// })

app.get('/about' , (req , res) =>{
    res.send(`Hello about from server`)
})

app.get('/news' , (req , res) =>{
    res.send(`Hello news from server`)
})

app.get('/election' ,middleware , (req , res) =>{
    res.send(`Hello election from server`)
}) 

app.get('/candidates' , middleware , (req , res) =>{
    res.send(`Hello candidates from server`)
}) 

app.get('/register/voter' , (req , res) =>{
    res.send(`Hello voter from server`)
})

app.get('/signin/voter' , (req , res) =>{
    res.send(`Hello signup from server`)
}) 


app.listen(PORT , () =>{
    console.log(`Server is running ${PORT}`);
})