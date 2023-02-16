const mongoose = require('mongoose');
const productSchema=new mongoose.Schema({
    dsin:{
        type:String,
    },
    name:{
        type:String
    },
    mrp:{
        type:String
    },
    hsn:{
        type:String
    },
    gstSlap:{
        type:String
    },
    unit:{
        type:String
    }
});

const Product=mongoose.model("Product",productSchema);

module.exports=Product;