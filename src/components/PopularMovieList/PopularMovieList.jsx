import React, { useState, useEffect } from 'react';
import MovieCard from 'components/MovieCard';
import {
  StyledMovieList,
  StyledMovieListContainer,
  StyledMovieListTitle,
} from './PopularMovieList.styled';
import { useLocation } from 'react-router-dom';

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=f381e2d7545c3f7238b0aa9291356ecc&language=en-US`
    )
      .then(res => res.json())
      .then(data => setMovieList(data.results));
  };

  return (
    <StyledMovieListContainer>
      <StyledMovieListTitle>Popular Movies</StyledMovieListTitle>
      <StyledMovieList>
        {movieList.map(movie => (
          <MovieCard key={movie.id} movie={movie} state={{ from: location }} />
        ))}
      </StyledMovieList>
    </StyledMovieListContainer>
  );
};

export default MovieList;
