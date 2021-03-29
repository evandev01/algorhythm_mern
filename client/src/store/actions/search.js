// import axios from 'axios';
// import { GET_SONGS, SONGS_ERROR } from './types';

// // Get songs
// export const getSongs = search => async dispatch => {
//   const options = {
//     async: true,
//     method: 'GET',
//     url: 'https://deezerdevs-deezer.p.rapidapi.com/search?q=' + search,
//     headers: {
//       'x-rapidapi-key': 'a14afcd07bmsh9df0a39c0cff8aep1586e3jsn5f08bfceba64',
//       'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
//     }
//   };

//   try {
//     const res = await axios.request(options);

//     dispatch({
//       type: GET_SONGS,
//       payload: res.data
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };
