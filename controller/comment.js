const Post = require('../models/post');
const Comment = require('../models/comment');
module.exports.create = (request, response) => {
    Post.findById(request.body.postId, (error, post) => {
        if(error) return response.redirect('/');
        else if(post == null) response.send('ERROR');
        else {
            Comment.create({
                content : request.body.content,
                userId : request.user.id,
                postId : request.body.postId
            }, (error, comment) => {
                if (error) return response.redirect('/');
                else {
                    post.commentIds.push(comment.id);
                    post.save();
                    return response.redirect('/');
                }
            });
        }
    });
}
module.exports.delete = (request, response) => {
    Comment.findById(request.params.id, (error, comment) => {
        if(error) return response.send('ERROR : ',error);
        else{
            var _postId = comment.postId;
            comment.remove();
            Post.findByIdAndUpdate(_postId,{$pull : {commentIds : request.params.id}}, (error, id) => {
                if(error) return response.send('ERROR', error);
                else return response.redirect('/');
            })
        }
    })
}