/**
 * Created by andy on 5/16/17.
 */

// Dependencies
var express = require('express');
var router = express.Router();

var Product = require('../models/product');

Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');

// Return router
module.exports = router;