import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import MovieCard from 'components/MovieCard';
import {
  StyledMovieList,
  StyledMovieListContainer,
} from './SearchMoviesList.styled';

const SearchMoviesList = ({ data }) => {
  const location = useLocation();

  if (!data) {
    return;
  }

  return (
    <StyledMovieListContainer>
      <StyledMovieList>
        {data.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
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
