import React, { useState } from 'react';
import SearchBar from '../components/search/SearchBar';

const Search = () => {
  const [searchEntry, setSearchEntry] = useState({
    search: ''
  });

  const [searchResults, setSearchResults] = useState();

  const { search } = searchEntry;

  const handleChange = e => {
    setSearchEntry({ ...searchEntry, search: e.target.value });
    // console.log(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    // console.log('you clicked submit');
  };

  return (
    <div>
      <SearchBar
        value={search}
        handleChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Search;
