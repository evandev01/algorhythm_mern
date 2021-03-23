const express = require('express');
const router = express.Router();

const db = require('../model');

// @route  POST api/playlist
// @desc   Add new playlist
// @access Public
router.post('/', (req, res) => {
  db.Playlist.create({
    playlistName: req.body.playlistName
  });
});

// @route  GET api/playlist
// @desc   Gets all playlists
// @access Public
router.get('/', (req, res) => {
  db.Playlist.findAll()
    .then(playlists => {
      console.log(playlists);
      res.json(playlists);
    })
    .catch(err => console.log(err));
});

// @route  DELETE api/playlist
// @desc   Deletes playlist by id
// @access Public
router.delete('/:id', async (req, res) => {
  await db.Playlist.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(() => res.json(`Deleted playlist with id: ${req.params.id}`))
    .catch(err => console.log('Error occurred: ', err));
});

module.exports = router;
