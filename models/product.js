/**
 * Created by andy on 5/16/17.
 */

var restful = require('node-restful');
var mongoose = restful.mongoose;

var productSchema = new mongoose.Schema({
    name: String,
    sku: String,
    price: Number
});

module.exports =restful.model('products', productSchema);