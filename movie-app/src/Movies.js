import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.omdbapi.com/', {
          params: {
            apikey: '9d159e80', // Personal api key
            s: 'Luke Skywalker', 
          },
        });
        setMovies(response.data.Search);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <strong>Title:</strong> {movie.Title} | <strong>Year:</strong> {movie.Year}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
