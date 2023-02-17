const express = require('express');
const bodyParser=require('body-parser');
const expressLayout=require('express-ejs-layouts');
const db=require('./config/mongoose');
const flash=require('connect-flash');
const notification=require('./config/Notification');
// use session because of connect-flash
const session=require('express-session');
const port = 8000;


const app=express();

app.set('view engine','ejs');
app.set('views','./views');

app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.use(bodyParser.urlencoded({extended:false}));

app.use(expressLayout);

app.use(express.static('./asstes'));

app.use(session({ cookie: { maxAge: 60000 }, 
    secret: 'woot',
    resave: false, 
    saveUninitialized: false
}));

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