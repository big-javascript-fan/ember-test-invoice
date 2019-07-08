var express = require('express');
var app = express();
 
// For receiving JSON in posts
var bodyParser = require('body-parser');
// For the database
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('./db/MyDb.db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});
// Add restful controller
require('./InvoiceController')(app, db);    

app.listen(3000);