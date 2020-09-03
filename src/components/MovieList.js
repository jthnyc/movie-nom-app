import React, { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";

const MovieList = () => {
  const { movie, addItem } = useContext(SearchContext);

  return (
    <div className="movie-container">
      {movie ? (
        <div className="movie-details">
          {/* <img src={movie.Poster} alt="" /> */}
          <h5 className="movie-title">{movie.Title}</h5>
          <h6 className="movie-director">{movie.Director}</h6>
          <p className="movie-year">{movie.Year}</p>
          <button onCLick={addItem}>Nominate</button>
        </div>
      ) : (
        //   <div className="card-body" onClick={addItem}>
        //   <img src={movie.Poster} alt={`Poster of ${movie.Title}`} />
        //   <h5 className="card-title">{movie.Title}</h5>
        //   <h6 className="card-subtitle mb-2 text-muted">{movie.Director}</h6>
        //   <p className="card-text">{movie.Year}</p>
        // </div>
        <div movie-details>
          <h5>No results</h5>
        </div>
      )}
    </div>
  );
};

export default MovieList;
