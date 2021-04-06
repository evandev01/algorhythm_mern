const express = require('express');
const path = require('path');
const db = require('./model');

const app = express();

app.use(express.json({ extended: false }));

// app.get('/', (req, res) => res.json({ msg: 'Welcome to the music player' }));

// Define Routes
app.use('/api/playlist', require('./routes/api/playlist'));
app.use('/api/song', require('./routes/api/song'));

const PORT = process.env.PORT || 3001;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      `==> 🌎 Server listening on port ${PORT}. Visit http://localhost:3000 in your browser.`
    );
  });
});
