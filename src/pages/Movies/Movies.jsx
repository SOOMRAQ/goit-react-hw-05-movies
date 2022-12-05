import SearchMoviesList from 'components/SearchMoviesList';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { StyledForm, StyledInput, StyledSearchBtn } from './Movies.styled';

const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query' ?? '');

  useEffect(() => {
    if (!movieName) {
      return;
    }
    fetch(
      `https://api.themoviedb.org/3/search/movie/?api_key=f381e2d7545c3f7238b0aa9291356ecc&language=en-US&query=${movieName}`,
      {
        referrerPolicy: 'unsafe-url',
      }
    )
      .then(res => res.json())
      .then(data => setMovies(data.results));
  }, [movieName]);

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: event.target.input.value });
  };

  const handleChange = event => {
    setInputValue(event.target.value);
  };
  const visibleMovies = movies;
  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          value={inputValue}
          type="text"
          name="input"
          onChange={handleChange}
        />
        <StyledSearchBtn type="submit">Search</StyledSearchBtn>
      </StyledForm>
      <SearchMoviesList data={visibleMovies} />
    </>
  );
};

export default Movies;
