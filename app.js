var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors')
 
var app = express();
var index = require('./routes/index');
var products = require('./routes/products');
var category = require('./routes/category');
var books = require('./routes/books');
var customers = require('./routes/customers');
var transactions = require('./routes/transactions');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/books', books);
app.use('/products', products);
app.use('/category', category);
app.use('/customers', customers);
app.use('/transactions', transactions);
module.exports = app;
