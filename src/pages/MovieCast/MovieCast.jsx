import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StyledActorCard, StyledActorsList } from './MovieCast.styled';

const MovieCast = () => {
  const [actors, setActors] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=f381e2d7545c3f7238b0aa9291356ecc&language=en-US`
    )
      .then(res => res.json())
      .then(data => setActors(data));
  }, [id]);

  if (!actors) {
    return;
  }

  return (
    <div className="wrapper">
      <StyledActorsList>
        {actors.cast.map(({ name, profile_path, character }) => {
          return (
            <StyledActorCard key={name}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : 'https://media.istockphoto.com/id/1216251206/vector/no-image-available-icon.jpg?s=170667a&w=0&k=20&c=N-XIIeLlhUpm2ZO2uGls-pcVsZ2FTwTxZepwZe4DuE4='
                }
                alt=""
                width="150"
                style={{ borderRadius: '10px' }}
              />
              <p>
                <span style={{ color: 'yellow' }}>Name:</span> {name}
              </p>
              <p>
                <span style={{ color: 'yellow' }}>Character:</span> {character}
              </p>
            </StyledActorCard>
          );
        })}
      </StyledActorsList>
    </div>
  );
};

export default MovieCast;
