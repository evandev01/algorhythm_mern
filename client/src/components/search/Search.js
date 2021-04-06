import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

import Songs from './Songs';

// import { getSongs } from '../store/actions/search';

const Search = () => {
  const [searchEntry, setSearchEntry] = useState('');
  const [searchResults, setSearchResults] = useState();
  const [songId, setSongId] = useState();
  // const { search } = searchEntry;

  const handleChange = async e => {
    setSearchEntry(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log('now get songs');
    const options = {
      async: true,
      method: 'GET',
      url: 'https://deezerdevs-deezer.p.rapidapi.com/search?q=' + searchEntry,
      headers: {
        'x-rapidapi-key': 'a14afcd07bmsh9df0a39c0cff8aep1586e3jsn5f08bfceba64',
        'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    };
    axios
      .request(options)
      .then(function (response) {
        const songItems = response.data.data;
        // console.log('success');

        songItems.map(items => {
          // console.log('success');
          setSongId(items.id);
          setSearchResults(songItems);
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <Songs
      value={searchEntry}
      handleChange={handleChange}
      onSubmit={onSubmit}
      songs={searchResults}
      songId={songId}
    ></Songs>
  );
};

export default Search;
