const express = require('express');
const app     = express();
const player  = require('play-sound')(opts = {});

app.get('/', (req, res) => {
  player.play(`${__dirname}/damn-son.mp3`, (err) => { if (err) throw err });
  res.send('Damn son, where\'d you find this?!');
});

app.listen(3003, () => console.log('Listening on port 3003!'));
