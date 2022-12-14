import styled from '@emotion/styled';
import BackIconButton from 'components/BackIconButton';
import { NavLink } from 'react-router-dom';

export const StyledMoviePage = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 80px;
`;

export const StyledMovieIntro = styled.div`
  width: 80%;
  position: relative;
`;

export const StyledMovieBackdrop = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  object-position: 0 35%;
`;

export const StyledMovieDetailContainer = styled.div`
  position: absolute;
  top: 300px;
  display: flex;
  align-items: center;
  width: 75%;
`;

export const StyledGoBackBtn = styled(BackIconButton)`
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const StyledMoviePosterContainer = styled.div`
  margin-right: 30px;
`;

export const StyledMoviePoster = styled.img`
  width: 300px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.86) 0px 22px 40px 6px;
`;

export const StyledMovieDetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 450px;
  color: white;
`;

export const StyledMovieCommonDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-shadow: 0px 0px 5px #000000;
  padding-top: 50px;
`;

export const StyledMovieName = styled.h2`
  font-weight: 600;
  font-size: 3rem;
`;

export const StyledMovieVoteCount = styled.span`
  margin-left: 1rem;
`;

export const StyledMovieGenreList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

export const StyledMovieGenre = styled.li`
  padding: 0.5rem;
  border: 2px solid white;
  border-radius: 20px;
  margin-right: 1rem;
`;

export const StyledMovieSynopsis = styled.div`
  margin: 2rem 0;
  flex: 0.8;
`;

export const StyledSynopsisTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.25rem;
  font-weight: 600;
  display: flex;
  position: relative;
  align-items: center;
`;

export const StyledCastReviewsList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 40px;
  margin-top: 200px;
`;

export const StyledCastReviewsItem = styled.li`
  text-transform: uppercase;
`;

export const StyledLink = styled(NavLink)`
  transition: color 500ms ease;
  &:hover {
    color: yellow;
  }
  &.active {
    color: yellow;
  }
`;
