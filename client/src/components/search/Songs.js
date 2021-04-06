import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { getSongs } from '../../../store/actions';
import {
  Col,
  Row,
  Card,
  ListGroup,
  Image,
  Dropdown,
  Form,
  FormControl,
  Button,
  Container,
  Title
} from 'react-bootstrap';

const Songs = props => {
  var songs = props.songs;
  var songId = props.songId;

  if (!songs) {
    songs = [];
  }

  return (
    <Container>
      <div>
        <Row>
          <Form onSubmit={e => props.onSubmit(e)} inline>
            <FormControl
              onChange={props.onChange}
              type='text'
              placeholder='Search'
              name='search'
              value={props.value}
              onChange={e => props.handleChange(e)}
              className='mr-sm-2'
            />
            <Button type='submit' variant='outline-success'>
              Search Songs
            </Button>
          </Form>
        </Row>
      </div>

      {songs.map(song => {
        var songName = song.title;
        var artistName = song.artist.name;
        var albumName = song.album.title;
        var mp3 = song.preview;
        var albumArt = song.album.cover_medium;
        return (
          <Row>
            <ul>
              <>
                <Col>
                  <div className='songs'>
                    <Card id='card'>
                      <ListGroup key={songId} horizontal>
                        <ListGroup.Item>{songName}</ListGroup.Item>
                        <ListGroup.Item>{albumName}</ListGroup.Item>
                        <ListGroup.Item>{artistName}</ListGroup.Item>
                      </ListGroup>
                    </Card>
                    <Image src={albumArt}></Image>
                    <audio key={songId} controls src={mp3}></audio>
                    <Dropdown>
                      <Dropdown.Toggle variant='success' id='dropdown-basic'>
                        Add To Playlist
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>Create Playlist</Dropdown.Item>
                        <Dropdown.Item></Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Col>
              </>
            </ul>
          </Row>
        );
      })}
    </Container>
  );
};
export default Songs;
