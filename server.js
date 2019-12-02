// BASE SETUP
// ==============================================
//import { checkServerIdentity } from 'tls';
var SchemaModel = require('./City.js');
var SchemaModelItinerary= require("./Itinerary.js");
var SchemaModelActivity= require("./Activity.js");
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

app.get('/getAllActivities', function(req, res) {
    console.log("llamo ")
    SchemaModelActivity.find(function(err, activities) {
        console.log('activities: ' , activities);
        res.send(activities)});
    });

app.get('/getAllActivities/:city/:itinerary', (req, res) => {
    let cityRequested = req.params.city;
    let itineraryRequested = req.params.itinerary;
    SchemaModelActivity.find({ city: cityRequested, itinerary: itineraryRequested  })
    .then( activities => {
        console.log('activities: ' , activities);
        res.send(activities)
    });
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