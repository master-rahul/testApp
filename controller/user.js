const User = require('../models/user');
module.exports.add = (request, response) => {
    if(request.body.password == request.body.confirmPassword){
        User.findOne({email : request.body.email}, (error, user) => {
            if (error) return response.redirect('back');
            else if (user != null) return response.redirect('back');
            else{
                User.create(request.body, (error)=> {
                    if (error) return response.redirect('back');
                    else return response.redirect('/');
                });
            }
        });
    } else return response.redirect('back');
}
module.exports.update = (request, response) => {

}
module.exports.signIn = (request, response) => {
    return response.render('signIn');
}
module.exports.signUp = (request, response) => {
    return response.render('signUp');
}
module.exports.profile = (request, response) => {
    return response.render('profile');
}