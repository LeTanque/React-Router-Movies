import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>

        {/* Iterate to save to savedtitle array */}
        {this.props.list.map(movie => (
          <span className="saved-movie" key={movie.id}>{movie.title}</span>
        ))}

        <Link to='/' className="home-button">Home</Link>
        {/* <div className="home-button">Home</div> */}
      </div>
    );
  }
}
