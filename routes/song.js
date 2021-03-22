const express = require('express');
const router = express.Router();

// @route  GET api/song
// @desc   Gets songs from search request
// @access Public
router.get('/', (req, res) => {
  res.send('GET songs route');
});

// @route  POST api/song
// @desc   POST song to db with playlistId
// @access Public
router.post('/', (req, res) => {
  res.send('POST song route');
});

// @route  DELETE api/song
// @desc   Deletes song by id
// @access Public
router.delete('/:id', (req, res) => {
  res.send('DELETE Song route');
});

module.exports = router;
