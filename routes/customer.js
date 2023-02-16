const express=require('express');
const router=express.Router();
const CustomerController=require('../controller/customer_controller');

router.post("/create",CustomerController.create);
router.get('/delete/:id',CustomerController.delete)
router.get('/addProducts/:id',CustomerController.addProduct)

module.exports=router;