import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MovieCard from './MovieCard';




export default function Movie(props) {
  // console.log('props:', props)
  const [movie, setMovie] = useState();

  const {id} = useParams(); 
  // was line 7 - useParams returns an object of the url params. param is in App.js :id aka PARAM. needed to destructure the array aka take out the id from the array. 
  // https://v5.reactrouter.com/web/api/Hooks/useparams
  // console.log('id:', id)

  // let id = 1; // ^^ 
  // Change ^^^ that line and use a hook to obtain the :id parameter from the URL
  




// here we're getting info from axios request in Movie.js, which gets back the STARS (NOT the movie)
  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/movies/${id}`) // Study this endpoint with Postman
      // data returns info on STARS -- what will show when we click the individual card
      .then(response => {
        // console.log('response:', response)
        // Study this response with a breakpoint or log statements
        // and set the response data as the 'movie' slice of state
        // debugger
        setMovie(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    // This effect should run every time time
    // the `id` changes... How could we do this? -- id in dependency array
  }, [id]);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => { }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }


  return (
    <MovieCard movie={movie} addToSavedList={props.addToSavedList} />
  );















  // const { title, director, metascore, stars } = movie;
  // return (
  //   <div className="save-wrapper">
  //     <div className="movie-card">
  //       {/* <h1>TESTTTT: hi</h1> */}
  //       <h2>{title}</h2>
  //       <div className="movie-director">
  //         Director: <em>{director}</em>
  //       </div>
  //       <div className="movie-metascore">
  //         Metascore: <strong>{metascore}</strong>
  //       </div>
  //       <h3>Actors</h3>

  //       {stars.map(star => (
  //         <div key={star} className="movie-star">
  //           {star}
  //         </div>
  //       ))}
  //     </div>
  //     <div className="save-button">Save</div>
  //   </div>
  // );
}
