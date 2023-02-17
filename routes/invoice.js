const express=require('express');
const router=express.Router();
const InvoiceController=require('../controller/invoice_controller');

router.get('/getInvoice/:id',InvoiceController.genrateInvoice);
router.get('/downloadInvoice/:id',InvoiceController.downloadInvoice);

module.exports=router;