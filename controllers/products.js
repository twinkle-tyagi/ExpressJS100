// here we will write all the logic related to products

// we put all logic here, but to use this logic in admin.js we have to export it, so
//const products = []; // add products array here from admin.js

const Product = require('../models/product');
exports.getAddProductPage = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  };

exports.postAddProduct = (req, res, next) => {
    //products.push({ title: req.body.title });
    const product = new Product(req.body.title); //creates an object of Product class.
    product.save(); //to save the object.
    res.redirect('/');
  };

  exports.addProduct = (req, res, next) => {
    //const products = adminRoutes.products; //as product array is already there, no need to extract 
    
    //const products = Product.fetchAll() // to get data using static method of class Product
    // we are now passing callback function so we have to modify here.
    
    Product.fetchAll( products => {
      res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
      });
    })
  }; 