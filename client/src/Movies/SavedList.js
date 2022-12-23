import React from 'react';
import { useHistory } from 'react-router-dom'


//to save a movie

export default function SavedList(props) {
  console.log('props:', props)
  
  const history = useHistory();
  // to get info from react router history props
  
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
        {props.list.map(movie => (
          <span className="saved-movie" key={movie.id}>
            {movie.title}
          </span>
        ))}
      <div className="home-button" onClick={(props)=>history.push("/")}>Home</div>
    </div>
  );
}
