const express=require('express');
const router=express.Router();
const InvoiceController=require('../controller/invoice_controller');

router.get('/getInvoice/:id',InvoiceController.genrateInvoice);

module.exports=router;