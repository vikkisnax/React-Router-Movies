import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

export default function MovieList(props) {
  console.log(props); // shows movies array that we gave it in App.js
  // for each movie* in the movieList state (named the prop movieS*), we're returning a MD component (below) and we gave each movie a key and movie prop (each line/each movie will show)
  // the way we rendered Route for MovieList doesn't pass in the React Router props... so we'd have to type it in ourselves if we want to use history, etc. in app.js
  //here we're getting info from axios request in App.js, which gets back the movies (NOT the stars)

  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        // key needs to be in parent/outer part, not inside in MD. if the movie id matches the url, then return MovieCard component. also pass in movie props aka array
        <Link to={`/movies/${movie.id}`} key={movie.id}>
          <MovieCard movie={movie}/>
        </Link>
      ))}
    </div>
    );
  }


// function MovieDetails(props) {
  // const { title, director, metascore } = props.movie;
  // me: ?? array destructuring so we get the keys for w/e we take out of the array
  // console.log(props); //shows each movie's info. 6 separate arrays.
  // this returns this layout for each movie
//   return (
//     <div className="movie-card">
//       <h2>{title}</h2>
//       <div className="movie-director">
//         Director: <em>{director}</em>
//       </div>
//       <div className="movie-metascore">
//         Metascore: <strong>{metascore}</strong>
//       </div>
//     </div>
//   );
// }
