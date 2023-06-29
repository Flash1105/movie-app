import React, { useState } from 'react';
import axios from 'axios';

const NewMovieForm = () => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('', {
        title,
        genre,
      });

      console.log(response.data); // log the newly created movie object

      // Reset form fields
      setTitle('');
      setGenre('');
    } catch (error) {
      console.error(error);
    }}}
