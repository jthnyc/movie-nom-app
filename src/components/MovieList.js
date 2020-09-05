import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import MovieDetail from "../components/MovieDetail";

const MovieList = () => {
  const { title, onNominateClicked, notNominatedList } = useContext(AppContext);

  return (
    <div className="movie-container">
      {title ? (
        <div>
          <h5>
            Results for <em>"{title}"</em>
          </h5>
          <div className="movielist-container">
            <ul>
              {notNominatedList.map((movie) => (
                <MovieDetail
                  key={movie.imdbID}
                  title={movie.Title}
                  year={movie.Year}
                  poster={movie.Poster}
                  id={movie.imdbID}
                  onNominateClicked={onNominateClicked}
                />
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <h5>Search Results</h5>
      )}
    </div>
  );
};

export default MovieList;
