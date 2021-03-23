const express = require('express');
const router = express.Router();

const db = require('../model');

// @route  GET api/song
// @desc   Gets songs from search request
// @access Public
router.get('/', (req, res) => {
  db.Song.findAll()
    .then(songs => {
      console.log(songs);
      res.json(songs);
    })
    .catch(err => console.log(err));
});

// @route  POST api/song
// @desc   POST song to db with playlistId
// @access Public
router.post('/', (req, res) => {
  const newSong = {
    songName: req.body.songName,
    artistName: req.body.artistName,
    albumName: req.body.albumName,
    mp3: req.body.mp3,
    albumArt: req.body.albumArt
  };

  db.Song.create({
    songName: newSong.songName,
    artistName: newSong.artistName,
    albumName: newSong.albumName,
    mp3: newSong.mp3,
    albumArt: newSong.albumArt
  })
    .then(() => {
      res.json('New song added:');
      res.json(newSong);
    })
    .catch(err => console.log(err));
});

// @route  DELETE api/song
// @desc   Deletes song by id
// @access Public
router.delete('/:id', (req, res) => {
  res.send('DELETE Song route');
});

module.exports = router;
