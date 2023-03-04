const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    }, email:{
        type : String,
        uinque : true,
        required : true
    }, password:{
        type : String,
        required : true
    }
}, { timestamps: true });  // adds updatedAt, createdAt in fields.

const User = mongoose.model('User', userSchema); 
module.exports = User;
