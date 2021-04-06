import { GET_PLAYLISTS, POST_PLAYLIST } from '../actions/types';

const initialState = {
  // create playlist
  playlists: [],
  playlist: null,
  loading: true
};

export default function (state = initialState, action) {
  // type of action
  // payload is data returned

  const { type, payload } = action;

  // Get playlists
  switch (type) {
    case GET_PLAYLISTS:
      return {
        ...state,
        playlists: payload,
        loading: false
      };
    case POST_PLAYLIST:
      return {
        ...state,
        playlist: payload,
        loading: false
      };
    default:
      return state;
  }
}
