import React from 'react';

const MovieList = ({ movies }) => (
  <div className="row">
    {movies.map((movie) => (
      <div className="col-md-3 mb-4" key={movie.imdbID}>
        <div className="card h-100">
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"}
            className="card-img-top"
            alt={movie.Title}
          />
          <div className="card-body">
            <h5 className="card-title">{movie.Title}</h5>
            <p className="card-text">Year: {movie.Year}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default MovieList;
