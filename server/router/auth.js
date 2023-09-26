const express = require('express');

const router = express.Router();
const bcrypt = require('bcrypt'); // For password hashing
const jwt = require('jsonwebtoken');

require("../db/connection");
const Voter = require('../models/userSchema');

router.get('/'  , (req , res) =>{
    res.send(`Hello world from server auth`)
})

router.post('/register/voter' , (req,res) =>{
   const {firstName,lastName,dateOfBirth,gender,phone,email,aadharNumber,citizen,birthPlace,address,username,password,confirmPassword} = req.body;
    if(!firstName || !lastName || !dateOfBirth || !gender || !phone || !email || !aadharNumber || !citizen || !birthPlace || !address || !username || !password || !confirmPassword){
        return res.status(422).json({error : "Please filled valid Credentials"})
    }

    Voter.findOne({username:username}).then((userExist) =>{
        if(userExist){
            return res.status(422).json({error : "Username already exists"})
        }

        const voter = new Voter({firstName,lastName,dateOfBirth,gender,phone,email,aadharNumber,citizen,birthPlace,address,username,password,confirmPassword})

        voter.save().then(() =>{
            res.status(201).json({message:"Registration Successful"});
        }).catch((err) => res.status(201).json({error:"Registration Failed"}));
    }).catch(err => {console.log(err);})
});
  

module.exports = router;