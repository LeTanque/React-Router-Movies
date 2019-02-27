import React, { Component, Fragment } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';


export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.fetchMovie(id);
  }

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        this.setState(() => ({ movie: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };

  // Uncomment this code when you're ready for the stretch problems
  // componentWillReceiveProps(newProps){
  //   if(this.props.match.params.id !== newProps.match.params.id){
  //     this.fetchMovie(newProps.match.params.id);
  //   }
  // }

  saveMovie = () => {
    
    
    this.props.savedList.forEach(element => {
      if (element.id === this.state.movie.id) {
        this.props.removeFromSavedList(this.state.movie);
      }
    });
    
    this.props.addToSavedList(this.state.movie);
    
  }

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }
    // const { title, director, metascore, stars } = this.state.movie;
    // console.log(this.state.movie);
    // console.log(this.props.savedList);
    // console.log(this.props.savedList.length);
    // console.log(this.props.removeFromSavedList)
    
    
    return (


      <Fragment>


        <MovieCard movie={this.state.movie} saveMovie={this.saveMovie} />
        

      </Fragment>

      
    );
  }
}
