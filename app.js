const express = require('express');
const app = express();
const database = require('./config/mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const expressSession = require('express-session');
const mongoStore = require('connect-mongo');
const passportLocal = require('./config/passport_local_strategy');

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(expressSession({
    name : 'sample',
    secret : 'hello',
    saveUninitialized : false,
    resave : false,
    cookie :{ maxAge : 1000 * 10000},
    store : mongoStore.create({
        mongoUrl : 'mongodb://localhost/sampleSocialApp',
        autoRemove : 'interval',
        autoRemoveInterval : 10
    }, (error) => { console.log('error : adding session token to mongodb');})
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use(bodyParser.urlencoded({extended : false}));
app.use('/', require('./routes/home'));

app.listen(8000, function(error){
    if(error) console.log(error);
    else console.log('Experss Server Running at 8000');
});