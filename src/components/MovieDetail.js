import React from "react";

const MovieDetail = ({ poster, title, director, year, addItem }) => {
  return (
    <div className="movie-details">
      {/* <img src={poster} alt="" /> */}
      <h5 className="movie-title">{title}</h5>
      <h6 className="movie-director">{director}</h6>
      <p className="movie-year">{year}</p>
      <button onClick={addItem}>Nominate</button>
    </div>
  );
};

export default MovieDetail;
