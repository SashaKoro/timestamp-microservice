const hbs = require('hbs');

const express = require('express');
let app = express();

app.get('/:date', (req, res) => {
  let date = req.params.date;
  res.send(date);
});

app.get('/', (req, res) => {
  res.render( 'intro.hbs');
});

app.listen(2000);
console.log('Starting app on port 2000');
