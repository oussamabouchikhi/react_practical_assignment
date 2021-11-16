import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');
  const [darkTheme, setDarkTheme] = useState(false);
  const [clientID, setClientID] = useState(
    process.env.REACT_APP_UNSPLASH_ACCESS_KEY
  );

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${term}&client_id=${clientID}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.results);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [clientID, term]);

  return (
    <main className={`${darkTheme && 'dark-mode'}`}>
      <Navbar toggleTheme={toggleTheme} />
      <div className='container mx-auto px-4 md:px-12'>
        <ImageSearch searchText={(text) => setTerm(text)} />

        {!isLoading && images.length === 0 && (
          <h1 className='text-5xl text-center mx-auto mt-32'>
            No Images Found
          </h1>
        )}

        {isLoading ? (
          <h1 className='text-6xl text-center mx-auto mt-32'>Loading...</h1>
        ) : (
          <div className='flex flex-wrap -mx-1 lg:-mx-4'>
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
