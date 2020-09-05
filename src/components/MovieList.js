import React, { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import MovieDetail from "../components/MovieDetail";
import { ReactSortable } from "react-sortablejs";

const MovieList = () => {
  const { searchResult, setSearchResult, nominatedList, title } = useContext(
    SearchContext
  );

  console.log("Movie LIST Before: ", searchResult);

  // ? movieList.filter(
  //   (movie) =>
  //     !nominatedList.find(
  //       (nominatedMovie) => nominatedMovie.imdbID === movie.imdbID
  //     )
  // )

  let notNominatedList = searchResult
    ? searchResult.filter((movie) => {
        console.log(
          "nominatedList.includes(res)",
          nominatedList.includes(movie)
        );
        return !nominatedList.find(
          (nominatedMovie) => nominatedMovie.imdbID === movie.imdbID
        );
      })
    : [];

  console.log("NOT NOMINATED LIST: ", notNominatedList);

  return (
    <div className="movie-container">
      {searchResult ? (
        <h5>
          Results for <em>"{title}"</em>
        </h5>
      ) : (
        ""
      )}

      {searchResult ? (
        <div className="movielist-container">
          <ReactSortable
            list={searchResult}
            setList={setSearchResult}
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
