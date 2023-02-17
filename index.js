const express = require('express');
const bodyParser=require('body-parser');
const expressLayout=require('express-ejs-layouts');
const db=require('./config/mongoose');
const flash=require('connect-flash');
const notification=require('./config/Notification');
const session=require('express-session');
const passport=require('passport');
const localStategy=require('./config/passport-local-strategy');
const dotenv = require('dotenv').config()
const port = process.env.port||8000;


const app=express();
// set up view engine ejs
app.set('view engine','ejs');
app.set('views','./views');

app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
// add body-parser
app.use(bodyParser.urlencoded({extended:false}));

app.use(expressLayout);

app.use(express.static('./asstes'));

app.use(session({ 
    name:'userId',
    secret: 'woot',
    resave: false, 
    saveUninitialized: false,
    cookie: { 
        maxAge: 1000*60*100 
    }, 
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

app.use(flash());

app.use(notification.setFlsah);

app.use('/',require('./routes/index.js'));


app.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("server is up on port ",port);
})
