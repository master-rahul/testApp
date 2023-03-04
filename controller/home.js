const Post = require('../models/post');
module.exports.home = (request, response) => {
    Post.find({}).populate('userId').populate({
        path : 'commentIds',
        populate :{
            path : 'userId'
        }
    }).exec((error, post) => {
        if(error) {
            console.log(error);
            return response.send('ERROR');
        }
        else return response.render('home',{post : post});
    });
}