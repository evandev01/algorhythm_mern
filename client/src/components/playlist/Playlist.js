import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPlaylists } from '../../store/actions/playlist';

const Playlist = ({ getPlaylists, playlists: { playlists } }) => {
  useEffect(() => {
    getPlaylists();
  }, [getPlaylists]);

  console.log(playlists);

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

// Get playlist state
Playlist.propTypes = {
  getPlaylists: PropTypes.func.isRequired,
  playlists: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  playlists: state.playlist
});

export default connect(mapStateToProps, { getPlaylists })(Playlist);
