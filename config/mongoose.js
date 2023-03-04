const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sampleSocialApp');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'error connecting mongodb'));
db.once('open',  ()=> {console.log('success connecting mongodb')});