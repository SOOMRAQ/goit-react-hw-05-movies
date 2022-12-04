import styled from '@emotion/styled';

export const StyledPosterImageContainer = styled.div`
  height: 600px;
`;
export const StyledPosterImage = styled.img`
  margin: auto;
  display: block;
  width: 100%;
`;

export const StyledPosterImageOverlay = styled.div`
  position: absolute;
  padding: 5rem;
  bottom: 0px;
  height: 70%;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-start;
  background-image: linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, 1));
  opacity: 1;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`;

export const StyledPosterTitle = styled.h2`
  font-weight: 900;
  font-size: 4rem;
  margin-bottom: 0.4rem;
  text-align: left;
`;
export const StyledPosterRuntime = styled.p`
  font-size: 2rem;
  margin-bottom: 1rem;
`;
export const StyledPosterRating = styled.span`
  margin-left: 3rem;
`;
export const StyledPosterDescription = styled.h2`
  font-style: italic;
  font-size: 1rem;
  margin-bottom: 0.25rem;
  display: flex;
  text-align: left;
  width: 50%;
`;
