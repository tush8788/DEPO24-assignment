const express=require('express');
const router=express.Router();
const ProductController=require('../controller/product_controller');
const passport=require('passport');

//add prodoct page
router.get('/addProduct',passport.checkAuthentication,ProductController.addProduct);
//add product 
router.post('/create',passport.checkAuthentication,ProductController.create);

module.exports=router;