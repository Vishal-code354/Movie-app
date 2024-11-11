import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [famousMovies, setFamousMovies] = useState([]);
  const [showAllTrending, setShowAllTrending] = useState(false);
  const [showAllOld, setShowAllold] = useState(false);

  const apiKey = 'a0a2f539'; // Replace with your OMDb API key

  useEffect(() => {
    const fetchTrending = async () => {
      const response = await axios.get(`https://www.omdbapi.com/?s=new&type=movie&apikey=${apiKey}`);
      setTrendingMovies(response.data.Search || []);
    };

    const fetchFamous = async () => {
      const response = await axios.get(`https://www.omdbapi.com/?s=classic&type=movie&apikey=${apiKey}`);
      setFamousMovies(response.data.Search || []);
    };

    fetchTrending();
    fetchFamous();
  }, []);

  const handleSearch = async () => {
    const response = await axios.get(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`);
    setTrendingMovies(response.data.Search || []);
  };

  return (
    <div>
      <h1 className="text-center my-4">Search for Movies</h1>
      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>Search</button>
      </div>

      <div className='containor d-flex flex-column'>
      <h2>Trending Movies</h2>
      <MovieList movies={showAllTrending ? trendingMovies : trendingMovies.slice(0, 4)} />
      {trendingMovies.length > 5 && (
        <button className="btn btn-warning w-25 pos-btn " onClick={() => setShowAllTrending(!showAllTrending)}>
          {showAllTrending ? "Show Less" : "Show More"}
        </button>
      )}

      </div>
     <div className='contanior d-flex flex-column'>
     <h2>Famous Movies</h2>
      <MovieList movies={showAllOld ? famousMovies:  famousMovies.slice(0, 4)} />
      {trendingMovies.length > 5 && (
        <button className="btn btn-warning w-25 pos-btn" onClick={() => setShowAllold(!showAllOld)}>
          {showAllOld ? "Show Less"  : "Show More"}
        </button>
      )}
     </div>
    </div>
  );
};

export default Home;
