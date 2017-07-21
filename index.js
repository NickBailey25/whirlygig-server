const express = require('express');
const app     = express();


app.get('/locations', (req, res) => {
  res.sendFile(__dirname + '/locations.json');
});

app.listen(3003, () => console.log('get data at localhost:3003/locations'));
