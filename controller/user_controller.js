const UserDB=require('../models/user');

//signin page
module.exports.signIn=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/');
    }
    return res.render("signIn",{title:"SignIn"})
}

//signUp page
module.exports.signUp=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/');
    }
    return res.render("signUp",{title:"SignUp"})
}

//create user
module.exports.create= async function(req,res){
    try{
        // console.log(req.body);
        if(req.body.password!=req.body.ConformPassword){
            req.flash("error","password and confirm password not match..");
            return res.redirect('back');
        }

        let user=await UserDB.findOne({email:req.body.email});
        if(!user){
            user=await UserDB.create(req.body);
            req.flash('success','User Create Successfully..');
            return res.redirect("/user/signin");
        }
        req.flash('error','User Exist just Login..');
        return res.redirect("/user/signin");
    }
    catch(err){
        console.log(err);
        req.flash('error',"Internal Server Error");
        return res.redirect('back');
    }
}

//create session
module.exports.createSession=function(req,res){
        req.flash('success',"Successfully Signin..");
        return res.redirect('/');
}

// signOut
module.exports.signOut=(req,res)=>{
    req.logout((err)=>{
        req.flash('success','signout successfully');
        return res.redirect('/user/signin');
    })
}