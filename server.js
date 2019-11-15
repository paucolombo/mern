// BASE SETUP
// ==============================================

var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

// ROUTES
// ==============================================

// sample route with a route the way we're used to seeing it
app.get('/', function(req, res) {
    res.send('Hello World!');  
});

// we'll create our routes here

// START THE SERVER
// ==============================================
app.listen(port);
var mongoose=require ('mongoose');
mongoose.connect('mongodb+srv://Pauu:mpclpi12@cluster0-otyhr.mongodb.net/my_intinerary?retryWrites=true&w=majority', {useNewUrlParser: true},function (err){
if (err) throw err;
console.log("Connected");
});

//var schemaCity = require('./City.js');
app.get('/getcities', function(req, res) {

    res.send() 
    //return this.model('Animal').find({ type: this.type }, cb); 
});