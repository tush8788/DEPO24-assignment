const express=require('express');
const router=express.Router();
const ProductController=require('../controller/product_controller');
//add prodoct page
router.get('/addProduct',ProductController.addProduct);
//add product 
router.post('/create',ProductController.create);

module.exports=router;