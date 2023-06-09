const path = require('path');

const express = require('express');
const productRouter=require('../controllers/products');


const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', productRouter.getShopProduct);

module.exports = router;
