// import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

// import { Card, ListGroup } from 'react-bootstrap';

// const PlaylistComp = ({ playlists }) => {
//   return (
//     <Card>
//       <ListGroup variant='flush'>
//         {playlists.map(playlist => (
//           <ListGroup.Item key={playlist.id}>
//             {playlist.playlistName}
//           </ListGroup.Item>
//         ))}
//       </ListGroup>
//     </Card>
//   );
// };

// PlaylistComp.propTypes = {
//   playlists: PropTypes.array.isRequired
// };

// const mapStateToProps = state => ({
//   playlists: state.playlist
// });

// export default connect()(PlaylistComp);
