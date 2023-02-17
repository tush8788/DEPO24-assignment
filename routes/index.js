const express=require('express');
const router=express.Router();
const homeController=require('../controller/home_controller.js');

router.get('/',homeController.home);
router.use('/customer',require('./customer'));
router.use('/product',require('./product'));
router.use('/invoice',require('./invoice'));
module.exports=router;