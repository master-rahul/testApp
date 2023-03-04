const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    content:{
        type : String,
        required : true
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    commentIds : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Comment'
    }]
},{timestamps : true});  // adds updatedAt, createdAt in fields.

const Post = mongoose.model('Post', postSchema);
module.exports = Post;