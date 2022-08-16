//This is route file so should only contain routes and not buisness logic.
// so to seperate logic from route, we put logic is seperate products.js file in controller

const path = require('path');

const express = require('express');

const productController = require('../controllers/products'); // importing products.js
//const rootDir = require('../util/path');

const router = express.Router();

//const products = [];

// /admin/add-product => GET
router.get('/add-product', productController.getAddProductPage); // we use getAddProductPage() like this to access logic.

// /admin/add-product => POST
router.post('/add-product', productController.postAddProduct); //to get postProductPage logic

//exports.products = products; // we dont need this as we dont have products array anymore

module.exports = router; // to export