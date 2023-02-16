const CustomerDB=require('../models/customer');

module.exports.home=async function(req,res){
    let Customer=await CustomerDB.find({});
    return res.render('home',{
        title:"Home",
        Customers:Customer
    })
}