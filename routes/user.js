const express=require('express');
const router=express.Router();
const UserController=require('../controller/user_controller');
const passport=require('passport');

//signin page 
router.get('/signin',UserController.signIn);
// signup page
router.get('/signup',UserController.signUp);
//create new user
router.post('/create-user',UserController.create);
//create session
router.post('/create-session',passport.authenticate('local',{failureRedirect:"/user/signin"}),UserController.createSession);
//sigin out
router.get('/signout',UserController.signOut);

module.exports=router;