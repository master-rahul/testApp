const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

passport.use(new LocalStrategy({
        usernameField : 'email'
    }, (email, password, done) => {
        User.findOne({email : email},(error, user) => {
            if(error) return done(error);
            else if(user != null && user.password == password) return done(null, user);
            else return done(null, false);
        })
    }
));

passport.serializeUser( (user, done) =>{
    return done(null, user.id);
});

passport.deserializeUser( (id, done) => {
    User.findById(id, (error, userData) => {
        if(error) done(error);
        else if(id != null){
            var user = {name :  userData.name, id : userData.id};
            done(null, user);
        } else done (null, false);
    });
});

passport.setAuthenticatedUser = (request, response, next) => {
    if(request.isAuthenticated()) response.locals.user = request.user;
    return next();
}

passport.checkAuthenticatedUser = (request, response, next) => {
    if(request.isAuthenticated()) return next();
    return response.redirect('/user/signIn');
}

passport.redirectAuthenticatedUser = (request, response, next) => {
    if (request.isAuthenticated()) return response.redirect('/');
    return next();
}

module.exports = passport;