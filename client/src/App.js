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

  removeFromSavedList = movie => {
    const savedList = this.state.savedList;
    for ( let i=0; i<savedList.length; i++ ) {
      if ( savedList[i].id === movie.id) {
        savedList.splice(i, 1)
      }
    }
  };

  render() {
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
          render={props => <Movie {...props} 
                            savedList={this.state.savedList} 
                            addToSavedList={this.addToSavedList} 
                            removeFromSavedList={this.removeFromSavedList} 
                          />}
        />
        {/* <div>Replace this Div with your Routes</div> */}

      </Fragment>
    );
  }
}
