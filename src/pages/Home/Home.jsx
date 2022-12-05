import React from 'react';
import { useState, useEffect } from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import {
  StyledPosterDescription,
  StyledPosterImage,
  StyledPosterImageContainer,
  StyledPosterImageOverlay,
  StyledPosterRating,
  StyledPosterRuntime,
  StyledPosterTitle,
} from './Home.styled';
import MovieList from 'components/PopularMovieList';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/all/day?api_key=f381e2d7545c3f7238b0aa9291356ecc&language=en-US'
    )
      .then(res => res.json())
      .then(data => setPopularMovies(data.results));
  }, []);
  return (
    <>
      <div className="poster" style={{ paddingTop: '80px' }}>
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={4}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map(movie => (
            <Link
              key={movie.id}
              style={{ textDecoration: 'none', color: 'inherit' }}
              to={`/movie/${movie.id}`}
            >
              <StyledPosterImageContainer>
                <StyledPosterImage
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                  alt="Movie Poster"
                />
              </StyledPosterImageContainer>
              <StyledPosterImageOverlay>
                <StyledPosterTitle className="posterImage__title">
                  {movie ? movie.original_title || movie.name : ''}
                </StyledPosterTitle>
                <StyledPosterRuntime>
                  {movie ? movie.release_date || 'Translating Now' : ''}
                  <StyledPosterRating>
                    {movie ? movie.vote_average.toFixed(1) : ''}
                    <i className="fas fa-star" />{' '}
                  </StyledPosterRating>
                </StyledPosterRuntime>
                <StyledPosterDescription>
                  {movie ? movie.overview : ''}
                </StyledPosterDescription>
              </StyledPosterImageOverlay>
            </Link>
          ))}
        </Carousel>
        <MovieList />
      </div>
    </>
  );
};

export default Home;
