import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    console.log(this.state);

    return (
      <Fragment>

        <SavedList list={this.state.savedList} />
        <Route 
          exact 
          path='/' 
          component={MovieList} 
        />
        <Route 
          path='/movies/:id' 
          // component={Movie}
          render={props => <Movie {...props} addToSavedList={this.addToSavedList} />}
        />
        {/* <div>Replace this Div with your Routes</div> */}

      </Fragment>
    );
  }
}
