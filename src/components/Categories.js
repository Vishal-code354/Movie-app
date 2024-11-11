import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';

const Categories = () => {
  const [hollywood, setHollywood] = useState([]);
  const [bollywood, setBollywood] = useState([]);
  const [anime, setAnime] = useState([]);
  const [biopic, setBiopic] = useState([]);
  const [indian,setIndian]= useState([]);
  const apiKey = 'a0a2f539';

  useEffect(() => {
    const fetchCategory = async (category, setCategory) => {
      const response = await axios.get(`https://www.omdbapi.com/?s=${category}&apikey=${apiKey}`);
      setCategory(response.data.Search.slice(0, 4));
    };

    fetchCategory('hollywood', setHollywood);
    fetchCategory('bollywood', setBollywood);
    fetchCategory('anime', setAnime);
    fetchCategory('biopic', setBiopic);
    fetchCategory('hindi',setIndian);
  }, []);

  return (
    <div>
      <h2>Hollywood Movies</h2>
      <MovieList movies={hollywood} />

      <h2>Bollywood Movies</h2>
      <MovieList movies={bollywood} />

      <h2>Indian Movies</h2>
      <MovieList movies={indian} />
   
      <h2 className='text-center '>Anime Movies</h2>
      <MovieList movies={anime} />

      <h2>Biopic Movies</h2>
      <MovieList movies={biopic} />

    </div>
  );
};

export default Categories;
    