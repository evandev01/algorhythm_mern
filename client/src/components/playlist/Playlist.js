import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPlaylists } from '../../store/actions/playlist';

const Playlist = props => {
  return <div></div>;
};

Playlist.propTypes = {
  props: PropTypes
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
