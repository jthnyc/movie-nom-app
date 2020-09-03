import React, { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";

const MovieDetail = ({ title, director, year, id }) => {
  const { addItem } = useContext(SearchContext);

  return (
    <div className="movie-details">
      {/* <img src={poster} alt="" /> */}
      <h5 className="movie-title">{title}</h5>
      <h6 className="movie-director">{director}</h6>
      <p className="movie-year">{year}</p>
      <button onClick={() => addItem(id)}>Nominate</button>
    </div>
  );
};

export default MovieDetail;
