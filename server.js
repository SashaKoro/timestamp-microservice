const hbs = require('hbs');
const express = require('express');

let app = express();
const { dateChecker } = require('./dateChecker');


app.get('/:date', (req, res) => {
  let incomingDate = req.params.date;
  let date = dateChecker(incomingDate);
  if (!date) {
    return res.status(400).send('error');
  }
  res.send(date);
});

app.get('/', (req, res) => {
  res.render( 'intro.hbs');
});

app.listen(2000);
console.log('Starting app on port 2000');
