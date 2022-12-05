import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import {
  StyledCastReviewsItem,
  StyledCastReviewsList,
  StyledGoBackBtn,
  StyledLink,
  StyledMovieBackdrop,
  StyledMovieCommonDetails,
  StyledMovieDetailContainer,
  StyledMovieDetailInfo,
  StyledMovieGenre,
  StyledMovieGenreList,
  StyledMovieIntro,
  StyledMovieName,
  StyledMoviePage,
  StyledMoviePoster,
  StyledMoviePosterContainer,
  StyledMovieSynopsis,
  StyledMovieVoteCount,
  StyledSynopsisTitle,
} from './MovieDetail.styled';
import { ReactComponent as ArrowBackIcon } from '../../assets/icons/arrow-back.svg';

const MovieDetail = () => {
  const [currentMovieDetail, setMovieDetail] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=f381e2d7545c3f7238b0aa9291356ecc&language=en-US`
    )
      .then(res => res.json())
      .then(data => setMovieDetail(data));
  }, [id]);

  const handleClick = () => {
    setTimeout(() => {
      if (!document.querySelector('.wrapper')) {
        return;
      }
      document.querySelector('.wrapper').scrollIntoView({
        behavior: 'smooth',
      });
    }, 500);
  };
  return (
    <StyledMoviePage>
      <StyledMovieIntro>
        <StyledMovieBackdrop
          src={`https://image.tmdb.org/t/p/original${
            currentMovieDetail ? currentMovieDetail.backdrop_path : ''
          }`}
        />
        <StyledGoBackBtn aria-label="Go Back">
          <ArrowBackIcon width="20" height="20" />
        </StyledGoBackBtn>
      </StyledMovieIntro>

      <StyledMovieDetailContainer>
        <StyledMoviePosterContainer>
          <StyledMoviePoster
            src={`https://image.tmdb.org/t/p/original${
              currentMovieDetail ? currentMovieDetail.poster_path : ''
            }`}
          />
        </StyledMoviePosterContainer>
        <StyledMovieDetailInfo>
          <StyledMovieCommonDetails>
            <StyledMovieName>
              {currentMovieDetail ? currentMovieDetail.original_title : ''}
            </StyledMovieName>
            <div className="movie__tagline">
              {currentMovieDetail ? currentMovieDetail.tagline : ''}
            </div>
            <div className="movie__rating">
              {currentMovieDetail ? currentMovieDetail.vote_average : ''}{' '}
              <i class="fas fa-star" />
              <StyledMovieVoteCount>
                {currentMovieDetail
                  ? '(' + currentMovieDetail.vote_count + ') votes'
                  : ''}
              </StyledMovieVoteCount>
            </div>
            <div className="movie__runtime">
              {currentMovieDetail ? currentMovieDetail.runtime + ' mins' : ''}
            </div>
            <div className="movie__releaseDate">
              {currentMovieDetail
                ? 'Release date: ' + currentMovieDetail.release_date
                : ''}
            </div>
            <StyledMovieGenreList>
              {currentMovieDetail && currentMovieDetail.genres
                ? currentMovieDetail.genres.map(genre => (
                    <StyledMovieGenre key={genre.id}>
                      <span className="movie__genre" id={genre.id}>
                        {genre.name}
                      </span>
                    </StyledMovieGenre>
                  ))
                : ''}
            </StyledMovieGenreList>
          </StyledMovieCommonDetails>

          <StyledMovieSynopsis>
            <StyledSynopsisTitle>Synopsis</StyledSynopsisTitle>
            <div>{currentMovieDetail ? currentMovieDetail.overview : ''}</div>
          </StyledMovieSynopsis>
        </StyledMovieDetailInfo>
      </StyledMovieDetailContainer>
      <StyledCastReviewsList>
        <StyledCastReviewsItem>
          <StyledLink to="cast" onClick={handleClick}>
            Cast
          </StyledLink>
        </StyledCastReviewsItem>
        <StyledCastReviewsItem>
          <StyledLink to="reviews" onClick={handleClick}>
            Reviews
          </StyledLink>
        </StyledCastReviewsItem>
      </StyledCastReviewsList>
      <Outlet />
    </StyledMoviePage>
  );
};

export default MovieDetail;
