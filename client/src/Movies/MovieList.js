import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieList(props) {
  // console.log(props); // shows movies array that we gave it in App.js
  // for each movie* in the movieList state (named the prop movies*), we're returning a MD component (below) and we gave each movie a key and movie prop (each line/each movie will show)
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <Link to={`/movies/${movie.id}`}>
          <MovieDetails key={movie.id} movie={movie} />
        </Link>
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;
  // array destructuring so we get the keys for w/e we take out of the array
  // console.log(props); //shows each movie's info. 6 separate arrays.
  // this returns this layout for each movie
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
