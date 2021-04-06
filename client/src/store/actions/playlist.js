import axios from 'axios';

// import types from types.js
import { GET_PLAYLISTS, POST_PLAYLIST } from './types';

// Get playlists = make request to the backend for playlists
export const getPlaylists = () => async dispatch => {
  try {
    const res = await axios.get('/api/playlist');

    dispatch({
      type: GET_PLAYLISTS,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};
