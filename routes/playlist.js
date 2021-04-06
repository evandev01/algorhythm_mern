const express = require('express');
const router = express.Router();

const db = require('../model');

// @route  POST api/playlist
// @desc   Add new playlist
// @access Public
router.post('/', async (req, res) => {
  try {
    await db.Playlist.create({
      playlistName: req.body.playlistName
    });
    console.log(`this is the playlist i want to add: ${req.body.playlistName}`);
    res.json('success');
  } catch (error) {
    console.log(error);
    res.json(`error occurred: ${error}`);
  }
});

// @route  GET api/playlist
// @desc   Gets all playlists
// @access Public
router.get('/', async (req, res) => {
  try {
    await db.Playlist.findAll().then(pListItems => console.log(pListItems));
    res.json('success');
  } catch (error) {
    console.log(error);
    res.json(`error occurred: ${error}`);
  }
});

router.get('/:id', async (req, res) => {
  try {
    await db.Playlist.get({
      where: {
        id: req.params.id
      }
    });
    console.log(`Got playlist with id: ${req.params.id}`);
    res.json(`Got playlist with id: ${req.params.id}`);
  } catch (error) {
    console.log(error);
    res.json(`error occurred: ${error}`);
  }
});

// @route  DELETE api/playlist
// @desc   Deletes playlist by id
// @access Public
router.delete('/:id', async (req, res) => {
  try {
    await db.Playlist.destroy({
      where: {
        id: req.params.id
      }
    });
    console.log(`Deleted playlist with id: ${req.params.id}`);
    res.json(`Deleted playlist with id: ${req.params.id}`);
  } catch (error) {
    console.log(error);
    res.json(`error occurred: ${error}`);
  }
});

module.exports = router;
