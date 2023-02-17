const easyinvoice=require('../InvoiceMaker/createInvoiceCustomer');
const CustomerDB=require('../models/customer');

module.exports.genrateInvoice= async function(req,res){
    console.log(req.params)
    try{
        let customer=await CustomerDB.findById(req.params.id)
        .populate({
            path:"cartProducts",
            populate:{
                path:"product",
            }
        });

        // easyinvoice(customer);
        return res.render('invoiceTemplete',{customer:customer,title:"invoice"});
        return res.redirect('back');
    }
    catch(err){
        console.log(err);
        return res.redirect('back');
    }

}