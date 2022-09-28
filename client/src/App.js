import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SavedList from './Movies/SavedList';

import { Link, Route, Switch } from 'react-router-dom';
import "./index.js";
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';


export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(response => {
          // debugger;
          // Study this response with a breakpoint (debugger;) or log statements
          // and set the response data as the 'movieList' slice of state
          // console.log(response) // we want the data
          setMovieList(response.data); //response.data = array[movie objs]
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

    <nav>
      <div className='nav-links'>
        <Link to="/">Movie List </Link>
        <Link to="/movies">Movie</Link>
      </div>
    </nav>

      <Switch>
        <Route path="/movies/id">
          <Movie />
        </Route>

        <Route path="/">
          <MovieList movies={movieList} />
          {/* movie bc that's what the prop name is in MovieList -- props.movies */}
        </Route>
      </Switch>
      
    </div>
  );
}
