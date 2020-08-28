import React from "react";
// import { SearchContext } from "../contexts/SearchContext";

const MovieList = ({ movie, addItem }) => {
  // const { movie } = useContext(SearchContext);

  return movie ? (
    <div className="card-body" onClick={addItem}>
      <img src={movie.Poster} alt={`Poster of ${movie.Title}`} />
      <h5 className="card-title">{movie.Title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{movie.Director}</h6>
      <p className="card-text">{movie.Year}</p>
    </div>
  ) : (
    <div>No results</div>
  );
};

export default MovieList;
