const mongoose=require('mongoose');
mongoose.set('strictQuery',false);
const dotenv=require('dotenv').config()

mongoose.connect(process.env.MONGO_URL||'mongodb://localhost/Depo24');

const db=mongoose.connection;

db.on('error',()=>{console.log("Error in connect DB")});

db.once('open',()=>{console.log("Successfully connected to DB")});

module.exports=db;