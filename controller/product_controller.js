const ProductDB=require('../models/products');

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
        let product=await ProductDB.findOne({hsn:req.body.hsn});
        if(!product){
            product=await ProductDB.create({
                dsin:req.body.DSIN,
                name:req.body.name,
                mrp:req.body.mrp,
                hsn:req.body.hsn,
                gstSlap:req.body.gstSlap,
                unit:req.body.unit
            })

            return res.redirect('back');
        }

        console.log("already added");
        return res.redirect('back');

    }
    catch(err){
        console.log(err);
        return res.redirect('back');
    }
}