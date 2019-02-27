import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.list,
      hidden: true
    }
  }

  render() {
    const { list } = this.props;
    // console.log(this.state.list);
    // console.log(this.state.list.length);
    // console.log(this.state.hidden);
    return (

      <div className="saved-list">

        <h3>Saved Movies</h3>
        
        {/* Iterate to save to savedtitle array */}
        {list.map(movie => (
          <span 
            className="saved-movie" 
            key={movie.id + Math.random()} >
            {movie.title}
          </span>
        ))}

        <Link to='/' className="home-button">Home</Link>

      </div>

    );
  }
}

