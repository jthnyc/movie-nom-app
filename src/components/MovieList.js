import React, { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import MovieDetail from "../components/MovieDetail";
import { ReactSortable } from "react-sortablejs";

const MovieList = () => {
  const { movieList, setMovieList, title } = useContext(SearchContext);

  let notNominatedList = movieList
    ? movieList.filter((movie) => movie.isNominated !== true)
    : [];

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
            {notNominatedList
              .sort((a, b) => a.Year - b.Year)
              .map((movie) => (
                <MovieDetail
                  key={movie.imdbID}
                  title={movie.Title}
                  year={movie.Year}
                  poster={movie.Poster}
                  id={movie.imdbID}
                  isDisabled={movie.isDisabled}
                />
              ))}
          </ReactSortable>
        </div>
      ) : (
        <h5>Search Results</h5>
      )}
    </div>
  );
};

export default MovieList;
