import React, { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import MovieDetail from "../components/MovieDetail";

const MovieList = () => {
  const { movieList, addItem } = useContext(SearchContext);
  console.log("MOVIES IN movielist: ", movieList);
  return (
    <div className="movie-container">
      {console.log("Are there any movies here: ", movieList)}
      {movieList ? (
        movieList
          .sort((a, b) => a.Year - b.Year)
          .map((movie) => (
            <MovieDetail
              key={movie.imdbID}
              title={movie.Title}
              director={movie.Director}
              year={movie.Year}
              poster={movie.Poster}
              addItem={addItem}
            />
          ))
      ) : (
        //   <div className="card-body" onClick={addItem}>
        //   <img src={movie.Poster} alt={`Poster of ${movie.Title}`} />
        //   <h5 className="card-title">{movie.Title}</h5>
        //   <h6 className="card-subtitle mb-2 text-muted">{movie.Director}</h6>
        //   <p className="card-text">{movie.Year}</p>
        // </div>
        <div>
          <h5>No results</h5>
        </div>
      )}
    </div>
  );
};

export default MovieList;
