import React, { Fragment } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const SearchBar = props => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default SearchBar;
