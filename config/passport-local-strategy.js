const passport=require('passport');
const localStategy=require('passport-local').Strategy;
const UserDB=require('../models/user');

passport.use(new localStategy({
    usernameField:'email',
    passReqToCallback:true
},async function(req,email,password,done){
    try{
        let user=await UserDB.findOne({email:email});
        if(!user || user.password != password){
            req.flash('error',"Invaild username or password");
            return done(null,false);
        }
        return done(null,user);
    }
    catch(err){
        req.flash('error','Internal Server Error');
        return done(err);
    }
}));

passport.serializeUser(function(user,done){
    done(null,user);
})

passport.deserializeUser( async function(id,done){
    try{
        let user = await UserDB.findById(id);
        if(!user){
           return done(null,false);       
        }
        return done(null,user);
    }
    catch(err){
        return done(err);
    }
});

passport.checkAuthentication=(req,res,next)=>{
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/user/signin');
}

passport.setAuthenticatedUser=(req,res,next)=>{
    if(req.isAuthenticated()){
        res.locals.user=req.user;
    }
    return next();
}