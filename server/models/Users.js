const mongoose = require('mongoose');


//schema

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
         type: String,
        required:true
    },
    phone: {
        type: Number,
        required:true
    },
    accountno: {
         type: Number,
        required:true
    },
    ifscno:{
        type: Number,
        required:true
    },
    accountbalance:{
        type:Number,
        required:true
    }
})

//model

const UserModel = mongoose.model("User",UserSchema)

module.exports = UserModel;