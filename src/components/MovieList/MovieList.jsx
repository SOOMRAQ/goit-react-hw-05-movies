import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from 'components/MovieCard';
import {
  StyledMovieList,
  StyledMovieListContainer,
  StyledMovieListTitle,
} from './MovieList.styled';

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : 'popular'
      }?api_key=f381e2d7545c3f7238b0aa9291356ecc&language=en-US`
    )
      .then(res => res.json())
      .then(data => setMovieList(data.results));
  };

  return (
    <StyledMovieListContainer>
      <StyledMovieListTitle>
        {(type ? type : 'POPULAR').toUpperCase()}
      </StyledMovieListTitle>
      <StyledMovieList>
        {movieList.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </StyledMovieList>
    </StyledMovieListContainer>
  );
};

export default MovieList;
