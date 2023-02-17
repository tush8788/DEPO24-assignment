const CustomerDB=require('../models/customer');
const path=require('path');
const pdf=require('html-pdf');
const fs=require('fs')
const ejs=require('ejs');

//view Invoice
module.exports.genrateInvoice= async function(req,res){
    try{
        let customer=await CustomerDB.findById(req.params.id)
        .populate({
            path:"cartProducts",
            populate:{
                path:"product",
            }
        });

        return res.render('invoiceTemplete',{customer:customer,title:"invoice"});
    }
    catch(err){
        console.log(err);
        return res.redirect('back');
    }

}

// download invoice
module.exports.downloadInvoice=async function(req,res){
    try{
        let customer=await CustomerDB.findById(req.params.id)
        .populate({
            path:"cartProducts",
            populate:{
                path:"product",
            }
        });

       let invoice=await ejs.renderFile(path.join(__dirname,"../views/invoiceTempletes.ejs"),{customer:customer});
        let options={
            format:'Letter'
        }
        pdf.create(invoice, options).toFile("report.pdf", function (err, data) {return res.download(path.join(__dirname,"../","report.pdf"));});
    }
    catch(err){
        console.log(err);
        return res.redirect('back');
    }
}