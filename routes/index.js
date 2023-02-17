const express=require('express');
const router=express.Router();
const homeController=require('../controller/home_controller.js');

router.get('/',homeController.home);
// customer
router.use('/customer',require('./customer'));
// product 
router.use('/product',require('./product'));
// invoice
router.use('/invoice',require('./invoice'));
// user
router.use('/user',require('./user'));

module.exports=router;