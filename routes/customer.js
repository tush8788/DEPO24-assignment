const express=require('express');
const router=express.Router();
const CustomerController=require('../controller/customer_controller');

router.post("/create",CustomerController.create);
//delete product 
router.get('/delete/:id',CustomerController.delete)
//add product page
router.get('/addProducts/:id',CustomerController.addProduct)
//add product in customer
router.post('/addProducts',CustomerController.addProductToCustomer)



module.exports=router;