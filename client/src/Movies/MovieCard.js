import React, { Fragment } from 'react';

const MovieCard = props => {
  const { stars, title, director, metascore } = props.movie;
  return (

    <Fragment>

      <div className="save-wrapper">
          
        <div className="movie-card">
          
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

        <button className='save-button' onClick={() => props.saveMovie()}>Save</button>

      </div>

    </Fragment>

  )
};

export default MovieCard;