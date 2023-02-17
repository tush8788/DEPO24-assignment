const ProductDB=require('../models/products');
const CartDB=require('../models/cart');
const CustomerDB=require('../models/customer');
// add product page
module.exports.addProduct= async function(req,res){
    try{
        let products=await ProductDB.find({});
        return res.render('addProduct',{
            title:"New Product",
            products:products
        });
    }
    catch(err){
        console.log(err);
        return res.render('addProduct',{
            title:"New Product"
        });
    }
    
}

//create product 
module.exports.create=async function(req,res){
    try{
        let product=await ProductDB.findOne({dsin:req.body.DSIN});
        if(!product){
            product=await ProductDB.create({
                dsin:req.body.DSIN,
                name:req.body.name,
                mrp:req.body.mrp,
                hsn:req.body.hsn,
                gstSlap:req.body.gstSlap,
                unit:req.body.unit
            })
        
            req.flash("success","Product Add Successfully..");
            return res.redirect('back');
        }
        req.flash("error","Product Already Exits ..");
        // console.log("already added");
        return res.redirect('back');

    }
    catch(err){
        console.log(err);
        req.flash("error","Internal server error");
        return res.redirect('back');
    }
}
