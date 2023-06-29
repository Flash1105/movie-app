import React, { useState } from 'react';

const Movies = () => {
    const {movies, setMovies} = useState([
    { title: 'Star Wars Episode I: The Phantom Menace', director: 'George Lucas' },
    { title: 'Star Wars Episode II: Attack of the clones', director: 'George Lucas'},
    { title: 'Star Wars Episode III: Revenge of the Sith', director: 'George Lucas'},
    { title: 'Star Wars Episode IV: A New Hope', director: 'George Lucas'},
    { title: '', director: ''},
    { title: '', director: ''},
    { title: '', director: ''},
    { title: '', director: ''},
    { title: '', director: ''},

]);
return (
<div>
    <h1>Best movies</h1>
    <ul>
    {movies.map((movie, index) => (
        <li key={index}>
            <strong>Title:</strong> {movie.title} | <strong>Director:</strong> {movie.director}
        </li>
    ))}
    </ul>
</div>
);
    };

    export default Movies;