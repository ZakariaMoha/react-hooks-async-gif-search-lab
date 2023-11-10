
import React, { useState } from 'react';

const GifSearch = ({ fetchGifs }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    fetchGifs(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter a search term:
        <input type="text" value={query} onChange={handleInputChange} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default GifSearch;
