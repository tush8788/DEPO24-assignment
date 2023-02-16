const express=require('express');
const router=express.Router();
const ProductController=require('../controller/product_controller');

router.get('/addProduct',ProductController.addProduct);
router.post('/create',ProductController.create);
module.exports=router;