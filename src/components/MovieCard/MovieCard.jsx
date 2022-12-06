import React, { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom';
import {
  StyledMovieCardContainer,
  StyledMovieCardDescription,
  StyledMovieCardImage,
  StyledMovieCardOverlay,
  StyledMovieCardRating,
  StyledMovieCardRuntime,
  StyledMovieCardTitle,
} from './MovieCard.styled';
import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {isLoading ? (
        <StyledMovieCardContainer>
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </StyledMovieCardContainer>
      ) : (
        <Link to={`/movie/${movie.id}`}>
          <StyledMovieCardContainer>
            <StyledMovieCardImage
              className="cards__img"
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                  : 'https://www.jakartaplayers.org/uploads/1/2/5/5/12551960/2297419_orig.jpg'
              }
              alt="Movie Poster"
            />
            <StyledMovieCardOverlay>
              <StyledMovieCardTitle>
                {movie ? movie.original_title : ''}
              </StyledMovieCardTitle>
              <StyledMovieCardRuntime>
                {movie ? movie.release_date : ''}
                <StyledMovieCardRating>
                  {movie ? movie.vote_average : ''}
                  <i className="fas fa-star"></i>
                </StyledMovieCardRating>
              </StyledMovieCardRuntime>
              <StyledMovieCardDescription>
                {movie ? movie.overview.slice(0, 118) + '...' : ''}
              </StyledMovieCardDescription>
            </StyledMovieCardOverlay>
          </StyledMovieCardContainer>
        </Link>
      )}
    </>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.object,
};
