const express = require('express');
const path = require('path');

let app = express();
const { dateChecker } = require('./dateChecker');
const port = process.env.PORT || 2000;

app.use(express.static('public'));

app.get('/:date', (req, res) => {
  let incomingDate = req.params.date;
  let date = dateChecker(incomingDate);
  if (!date) {
    return res.status(400).send('error');
  }
  res.send(date);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/main.html'));
});

app.listen(port, () => {
  console.log(`Starting app on port ${port}`);
});
