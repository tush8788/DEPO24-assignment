const CustomerDB=require('../models/customer');
const ProductDB=require('../models/products');
// create customer
module.exports.create=async function(req,res){
    try{
        //find customer already created or not
        let customer=await CustomerDB.findOne({customerName:req.body.customerName});
        if(!customer){
            customer=await CustomerDB.create(req.body);
            return res.redirect('back');
        }
        console.log("customer already exist in DB");
        return res.redirect('back');
    }
    catch(err){
        console.log(err);
        return res.redirect('back');
    }

}
//delete customer
module.exports.delete=async function(req,res){
    try{
        await CustomerDB.findByIdAndDelete(req.params.id);
        console.log("delete successfully");
        return res.redirect("back")
    }
    catch(err){
        console.log(err);
        return res.redirect('back');
    }
}
//add product to company Page
module.exports.addProduct=async function(req,res){
    try{
        let product=await ProductDB.find({});
        return res.render('addProductToCompany',{
            title:"Add Product",
            products:product,
            customer:req.params.id
        })
    }
    catch(err){
        console.log(err);
        return res.redirect('back');
    }
}