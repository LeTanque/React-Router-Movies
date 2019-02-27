import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// import MovieCard from './MovieCard';


export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }


  // Provide axios code //////////////////////////////////
  // Communicated with server, provides error notification
  componentDidMount() {
    axios
      .get('http://localhost:5000/api/movies')
      .then(response => {
        this.setState(() => ({ movies: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }
  // Provide axios code //////////////////////////////////
  ////////////////////////////////////////////////////////


  render() {
    // console.log(this.state);
    return (
      <Fragment>
        <div className="movie-list">
          {/* Iterate over entire movie list, grab each movie and return array */}
          {this.state.movies.map(movie => {
            return (
              <Fragment key={movie.id} >
                {/* <MovieCard 
                  movie={movie} 
                /> */}
                <MovieDetails 
                  movie={movie} 
                />
              </Fragment>
            )
          }
          )}
        </div>
        
      </Fragment>
    );
  }
}

function MovieDetails({ movie }) {
  const { title, director, metascore, stars, id } = movie;
  return (
    <Fragment>

      
        <div className="movie-card">
          
          <Link to={`/movies/${id}`}>
            <h2>{title}</h2>
          </Link>

          <div className="movie-director">
            Director: <em>{director}</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{metascore}</strong>
          </div>
          <h3>Actors</h3>

          {/* Iterate over array of stars from within each movie and grab each name */}
          {stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))}

        </div>
      
      
    </Fragment>
  );
}
