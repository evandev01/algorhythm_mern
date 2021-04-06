const express = require('express');
const router = express.Router();

const db = require('../../model');

// @route  POST api/playlist
// @desc   Add new playlist
// @access Public
router.post('/', async (req, res) => {
  try {
    const playlist = await db.Playlist.create({
      playlistName: req.body.playlistName
    });

    console.log('this is the playlist i want to add:');
    console.log(playlist);
    res.json('in the playlist route');
  } catch (error) {
    res.json(error);
    console.log('error occurred in the post route');
    console.log(error);
  }
});

// @route  GET api/playlist
// @desc   Gets all playlists
// @access Public
router.get('/', async (req, res) => {
  try {
    const playlists = await db.Playlist.findAll();

    console.log(playlists);
    res.json(playlists);
  } catch (error) {
    res.json(`error occurred in the get route: ${error}`);
    console.log(`error occurred in the get route: ${error}`);
  }
});

// @route  GET api/playlist
// @desc   Gets all playlists
// @access Public
router.get('/:id', async (req, res) => {
  try {
    const playlist = await db.Playlist.findAll({
      where: {
        id: req.params.id
      }
    });

    console.log(
      `Got playlist: ${req.body.playlistName} with id of ${req.params.id}`
    );
    res.json(
      `Got playlist: ${req.body.playlistName} with id of ${req.params.id}`
    );
  } catch (error) {
    res.json(error);
    console.log('error occurred in the get route');
    console.log(error);
  }
});

// @route  DELETE api/playlist
// @desc   Deletes playlist by id
// @access Public
router.delete('/:id', async (req, res) => {
  try {
    const deletedPlaylist = await db.Playlist.destroy({
      where: {
        id: req.params.id
      }
    });

    res.json(
      `Deleted playlist: ${req.body.playlistName} with id: ${req.params.id}`
    );
    console.log(
      `Deleted playlist: ${req.body.playlistName} with id: ${req.params.id}`
    );
  } catch (error) {
    res.json(error);
    console.log('Error occurred in the delete route');
    console.log(error);
  }
});

module.exports = router;
