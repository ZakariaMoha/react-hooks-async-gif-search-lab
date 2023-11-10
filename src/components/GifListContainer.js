
import React, { useState } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

const GifListContainer = () => {
  const [gifs, setGifs] = useState([]);

  const fetchGifs = query => {
    const apiKey = 'dc6zaTOxFJmzC'; // Default Giphy API key
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setGifs(data.data.slice(0, 3)); // Store the first 3 gifs in the state
      })
      .catch(error => console.error('Error fetching gifs:', error));
  };

  return (
    <div>
      <GifSearch fetchGifs={fetchGifs} />
      <GifList gifs={gifs} />
    </div>
  );
};

export default GifListContainer;
