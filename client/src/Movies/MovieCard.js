import React from 'react';

export default function MovieCard (props) {
  
  const { title, director, metascore, stars } = props.movie;
  
  // console.log('stars:', props.movie) // stars show up when i click a card 

  // each movie card will have this info and will have the 'stars' info if we click the individual card 

  return (
    <div className="save-wrapper">
      <div className="movie-card">
        {/* <h1>TESTTTT: hi</h1> */}
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        {
          stars && (
            <>
              <h3>Actors</h3>
              {
                stars.map(star => (
                  <div key={star} className="movie-star">
                    {star}
                  </div>
                ))
              }
            </>
          )
        }
      </div>
      <div className="save-button">Save</div>
    </div>
  );
}
