const mongoose = require('mongoose');

const userSchemaVoter = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },

    lastName:{
        type:String,
        required:true
    },

    dateOfBirth:{
        type:String,
        required:true
    },
    
    gender:{
        type:String,
        required:true
    },

    phone:{
        type:Number,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    aadharNumber:{
        type:Number,
        required:true
    },

    citizen:{
        type:String,
        required:true
    },

    birthPlace:{
        type:String,
        required:true
    },

    address: {
        type: String,
        required: true
    },

    username:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },

    confirmPassword:{
        type:String,
        required:true
    }
})

const Voter = mongoose.model('Voter' , userSchemaVoter)

module.exports = Voter;