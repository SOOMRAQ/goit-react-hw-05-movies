import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StyledList } from './MovieReviews.styled';

const MovieReviews = () => {
  const [reviews, setReviews] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=f381e2d7545c3f7238b0aa9291356ecc&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(data => setReviews(data));
  }, [id]);

  if (!reviews) {
    return;
  }

  return (
    <div className="wrapper">
      <StyledList>
        {reviews.results.length > 0
          ? reviews.results.map(({ id, author, content }) => {
              return (
                <li key={id}>
                  <p style={{ fontSize: 24, marginBottom: 10 }}>
                    Author: {author}
                  </p>
                  <p>Content: {content}</p>
                </li>
              );
            })
          : 'Sorry, no reviews for now'}
      </StyledList>
    </div>
  );
};

export default MovieReviews;
