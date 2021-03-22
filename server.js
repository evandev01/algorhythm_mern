const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({ msg: 'Welcome to the music player' }));

// Define Routes
app.use('/api/playlist', require('./routes/playlist'));
app.use('/api/song', require('./routes/song'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
