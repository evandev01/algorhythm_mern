const express = require('express');
const router = express.Router();

// @route  POST api/playlist
// @desc   Add new playlist
// @access Public
router.post('/', (req, res) => {
  res.send('POST Playlists route');
});

// @route  GET api/playlist
// @desc   Gets all playlists
// @access Public
router.get('/', (req, res) => {
  res.send('GET Playlists route');
});

// @route  DELETE api/playlist
// @desc   Deletes playlist by id
// @access Public
router.delete('/:id', (req, res) => {
  res.send('DELETE Playlist route');
});

module.exports = router;
