import React from 'react';
import { useHistory } from 'react-router-dom';


const MovieCard = props => {
  console.log(props)
  const { title, director, metascore, stars } = props.movie;
  const history = useHistory();
  const routeToCard = event => {
    setTimeout(() => {
      history.push(`/movies/${props.movie.id}`);
    }, 100);
  }

  return (
      <div className="movie-card" onClick={routeToCard}>
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
  );
};

export default MovieCard;
