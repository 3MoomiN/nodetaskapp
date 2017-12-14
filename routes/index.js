var express = require('express');
var app = express();
var router = express.Router();
app.get('/', function (req, res) {
res.render('index', { title: 'Kirjaudu' });
});
module.exports = app;