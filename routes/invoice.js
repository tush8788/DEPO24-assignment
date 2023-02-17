const express=require('express');
const router=express.Router();
const InvoiceController=require('../controller/invoice_controller');
const passport=require('passport');
//show invoice
router.get('/getInvoice/:id',passport.checkAuthentication,InvoiceController.genrateInvoice);
//download invoice 
router.get('/downloadInvoice/:id',passport.checkAuthentication,InvoiceController.downloadInvoice);

module.exports=router;