var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var port = process.env.PORT || 3000;

var app = express();

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var routes = require('./routes/movie_route.js');



app.use('/', routes);

app.listen(port);


// Nightmare testing

// var Nightmare = require("nightmare");

// var nightmare = Nightmare({ show: true });

// nightmare
//     .goto("http://localhost:3000/")
//     .type("#name", "test dog lives")
//     .click("#addMovieButton")
//     .wait("#links a")
//     .evaluate(function () {
//         return document.querySelector("#links a").href;
//     })
//     .end()
//     .then(function (result) {
//         console.log(result);
//     })
//     .catch(function (error) {
//         console.error("Search failed:", error);
//     }); 
