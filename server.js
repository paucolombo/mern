// BASE SETUP
// ==============================================
//import { checkServerIdentity } from 'tls';
var SchemaModel = require('./City.js');
var SchemaModelItinerary= require("./Itinerary.js");
var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());

/*app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });*/
// ROUTES
// ==============================================

// sample route with a route the way we're used to seeing it
app.get('/', function(req, res) {
    res.send('Hello World!');  
});

// we'll create our routes here

// START THE SERVER
// ==============================================
app.listen(port, () => {
    console.log("Server is running on " + port + "port");
  });

var mongoose=require ('mongoose');
mongoose.connect('mongodb+srv://Pauu:mpclpi12@cluster0-otyhr.mongodb.net/my_intinerary?retryWrites=true&w=majority', {useNewUrlParser: true},function (err){
if (err) throw err;
console.log("Connected");
});

app.get('/getAllCities', function(req, res) {
SchemaModel.find(function(err, cities) {
    console.log('cities: ' , cities);
    res.send(cities)});
});

app.get('/getAllItineraries/:city', (req, res) => {
    let cityRequested = req.params.city;
    SchemaModelItinerary.find({ City: cityRequested  })
    .then( itineraries => {
        console.log('itineraries: ' , itineraries);
        res.send(itineraries)
    });
});
    
app.get('/getAllItineraries', function(req, res) {
    SchemaModelItinerary.find(function(err, itineraries) {
        console.log('itineraries: ' , itineraries);
        res.send(itineraries)});
    });
app.post('/postCities', (req, res) => {
    console.log("body ", req.body);
    const newCity = new SchemaModel({
        city: req.body.city,
        country: req.body.country
    })
    newCity.save()
      .then(city => {
      res.send(city)
      })
      .catch(err => {
      res.status(500).send("Server error")}) 
});