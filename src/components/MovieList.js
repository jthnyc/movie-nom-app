import React, { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import MovieDetail from "../components/MovieDetail";
import { ReactSortable } from "react-sortablejs";

const MovieList = () => {
  const { movieList, setMovieList, title } = useContext(SearchContext);

  return (
    <div className="movie-container">
      {movieList ? (
        <h5>
          Results for <em>"{title}"</em>
        </h5>
      ) : (
        ""
      )}

      {movieList ? (
        <div className="movielist-container">
          <ReactSortable
            list={movieList}
            setList={setMovieList}
            disabled={true}
          >
            {movieList
              .sort((a, b) => a.Year - b.Year)
              .map((movie) => (
                <MovieDetail
                  key={movie.imdbID}
                  title={movie.Title}
                  director={movie.Director}
                  year={movie.Year}
                  poster={movie.Poster}
                  id={movie.imdbID}
                />
              ))}
          </ReactSortable>
        </div>
      ) : (
        //   <div className="card-body" onClick={addItem}>
        //   <img src={movie.Poster} alt={`Poster of ${movie.Title}`} />
        //   <h5 className="card-title">{movie.Title}</h5>
        //   <h6 className="card-subtitle mb-2 text-muted">{movie.Director}</h6>
        //   <p className="card-text">{movie.Year}</p>
        // </div>

        <h5>Search Results</h5>
      )}
    </div>
  );
};

export default MovieList;
