const express = require('express');
const fs = require('fs');
const app = express();
const engines = require('consolidate');
const image = require('./data/img.json');

app.engine('hbs', engines.handlebars);
app.set('view engine', 'hbs');
app.set('views', './views');

app.use('/images', express.static('./img'));
app.use('/styles', express.static('./styles'));
app.use('/script', express.static('./js'));

app.get('/', function(req, res) {
  res.render('index.hbs', { image });
});

app.listen(5100);
