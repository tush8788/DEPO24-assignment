const CustomerDB=require('../models/customer');
const ProductDB=require('../models/products');
const CartDB=require('../models/cart');
// create customer
module.exports.create=async function(req,res){
    try{
        //find customer already created or not
        let customer=await CustomerDB.findOne({customerName:req.body.customerName});
        if(!customer){
            customer=await CustomerDB.create(req.body);
            req.flash("success","Successfully Add Customer..");
            return res.redirect('back');
        }
        req.flash("error","customer already exist in DB..");
        console.log("customer already exist in DB");
        return res.redirect('back');
    }
    catch(err){
        console.log(err);
        req.flash("error","Internal server error");
        return res.redirect('back');
    }

}
//delete customer
module.exports.delete=async function(req,res){
    try{
        await CustomerDB.findByIdAndDelete(req.params.id);
        await CartDB.deleteMany({customer:req.params.id});
        req.flash("success","Customer Detele Successfully..");
        return res.redirect("back")
    }
    catch(err){
        console.log(err);
        req.flash("error","Internal server error");
        return res.redirect('back');
    }
}
//add product to company Page
module.exports.addProduct=async function(req,res){
    try{
        let product=await ProductDB.find({});
        let customer=await CustomerDB.findById(req.params.id)
        .populate({
            path:"cartProducts",
            populate:{
                path:"product",
            }
        });
        
        return res.render('addProductToCompany',{
            title:"Add Product",
            products:product,
            customer:customer
        })
    }
    catch(err){
        console.log(err);
        req.flash("error","Internal server error");
        return res.redirect('back');
    }
}
// add Product To Customer
module.exports.addProductToCustomer=async function(req,res){
    try{
        let cart=await CartDB.create({
            product:req.body.productId,
            quntity:req.body.qty,
            discount:req.body.discount,
            customer:req.body.customerId,
            estimateDate:req.body.estimateDate
        });

        if(cart){
            let customer=await CustomerDB.findById(req.body.customerId);
            customer.cartProducts.push(cart);
            customer.save();
        }
        req.flash("success","Product Add Successfully..");

        return res.redirect('back');
    }
    catch(err){
        console.log(err);
        req.flash("error","Internal server error");
        return res.redirect('back');
    }
}