const mongoose=require('mongoose');
const cartSchema=new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quntity:{
        type:Number,
        required:true
    },
    discount:{
        type:Number,
        required:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Customer"
    },
    estimateDate:{
        type:String,
    }
},{
    timestamps:true
});

const Cart=mongoose.model('Cart',cartSchema);

module.exports=Cart;