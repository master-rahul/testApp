const Post = require('../models/post');
const Comment = require('../models/comment');
module.exports.create = (request, response) => {
    Post.create({
        content : request.body.content,
        userId : request.user.id
    }, (error) =>{
        if(error) return response.send('ERROR');
        else return response.redirect('back');
    });
}
module.exports.delete = (request, response) => {
    Post.findById(request.params.id, (error, post) =>{
        if(error) return response.send('ERROR ::');
        else {
            post.remove();
            Comment.deleteMany({postId : request.params.id}, (error) => {
                if (error) return response.send('ERROR :');
                else return response.redirect('/');
            });
        }
    })
}