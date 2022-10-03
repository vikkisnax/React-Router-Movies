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
        {/* what do I link these to? movie to each card and movie list to all of them? -- what if I put the components here instead..aka with Route*/}
        {/* <Route path="/movies/:id"> 
          <Link to="/">MovieList</Link>
        </Route> */}
        {/* <Link to="/movies">Movie</Link> */}
          {/* don't need these. I linked home button in SavedList component to the home url "/" */}
      </div>
    </nav>

      <Switch>
        {/*2nd way to render Route - render function. didn't use here though */}
 
        {/* 3rd way to render Route - component. path. */}
        <Route path="/movies/:id"> 
          <Movie movies={movieList} />
        </Route>

        {/* 1st way to render Route */}
        <Route path="/">
          <MovieList movies={movieList} />
          {/* movie bc that's what the prop name is in MovieList -- props.movies */}
        </Route>
      </Switch>
      
    </div>
  );
}
