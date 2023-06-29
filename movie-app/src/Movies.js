import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Movies = () => {
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
      <h2>Movie List</h2>
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

export default Movies;
