import styled from '@emotion/styled';

export const StyledMovieCardContainer = styled.div`
  position: relative;
  z-index: 0;
  overflow: hidden;
  display: inline-block;
  min-width: 200px;
  height: 300px;
  margin: 0.19rem;
  border: 1px solid rgb(99, 99, 99);
  border-radius: 10px;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    z-index: 1000;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;

export const StyledMovieCardImage = styled.img`
  height: 300px;
`;

export const StyledMovieCardOverlay = styled.div`
  position: absolute;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 85%;
  height: 290px;
  padding: 0 1rem 1rem 1rem;
  background-image: linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, 1));
  opacity: 0;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
`;

export const StyledMovieCardTitle = styled.h3`
  font-weight: 900;
  font-size: 1rem;
  margin-bottom: 0.4rem;
`;

export const StyledMovieCardRuntime = styled.div`
  font-size: 0.75rem;
  margin-bottom: 0.25rem;
`;

export const StyledMovieCardRating = styled.span`
  float: right;
`;

export const StyledMovieCardDescription = styled.p`
  font-style: italic;
  font-size: 0.75rem;
  margin-bottom: 0.25rem;
`;
