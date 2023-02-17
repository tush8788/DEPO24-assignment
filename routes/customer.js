const express=require('express');
const router=express.Router();
const CustomerController=require('../controller/customer_controller');
const passport=require('passport');

//create customer
router.post("/create",passport.checkAuthentication,CustomerController.create);
//delete product 
router.get('/delete/:id',passport.checkAuthentication,CustomerController.delete)
//add product page
router.get('/addProducts/:id',passport.checkAuthentication,CustomerController.addProduct)
//add product in customer
router.post('/addProducts',passport.checkAuthentication,CustomerController.addProductToCustomer)



module.exports=router;