const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
const productRouter=require('../controllers/products');


// /admin/add-product => GET
router.get('/add-product',productRouter.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productRouter.postAddProduct);

module.exports=router;
