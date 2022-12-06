import PropTypes from 'prop-types';
import MovieCard from 'components/MovieCard';
import {
  StyledMovieList,
  StyledMovieListContainer,
} from './SearchMoviesList.styled';
import { useLocation } from 'react-router-dom';

const SearchMoviesList = ({ data }) => {
  const location = useLocation();
  if (!data) {
    return;
  }

  return (
    <StyledMovieListContainer>
      <StyledMovieList>
        {data.map(movie => (
          <MovieCard key={movie.id} movie={movie} state={{ from: location }} />
        ))}
      </StyledMovieList>
    </StyledMovieListContainer>
  );
};

export default SearchMoviesList;

SearchMoviesList.propTypes = {
  data: PropTypes.array,
  id: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  poster_path: PropTypes.string,
};
