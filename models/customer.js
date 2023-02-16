const mongoose = require('mongoose');
const customerSchema=new mongoose.Schema({
    customerName:{
        type:String,
        required:true,
        unique:true
    },
    customerGSTID:{
        type:String,
        required:true
    },
    customerAddress:{
        type:String,
    },
    cartProducts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Cart'
    }]
});

const Customer=mongoose.model('Customer',customerSchema);

module.exports=Customer;