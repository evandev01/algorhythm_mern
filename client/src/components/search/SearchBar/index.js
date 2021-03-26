import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const SearchBar = props => {
  return (
    <div>
      <Form inline>
        <FormControl
          onChange={props.onChange}
          type='text'
          placeholder='Search'
          name='search'
          value={props.value}
          onChange={e => props.handleChange(e)}
          className='mr-sm-2'
        />
        <Button
          type='submit'
          onClick={e => props.onSubmit(e)}
          variant='outline-success'
        >
          Search Songs
        </Button>
      </Form>
    </div>
  );
};

export default SearchBar;
