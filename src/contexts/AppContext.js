import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

export const AppContext = createContext();

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://omdbapi.com/?apikey=${API_KEY}`;

const AppContextProvider = (props) => {
  const [searchResult, setSearchResult] = useState([]);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState(API_URL);
  const [nominatedList, setNominatedList] = useState(() => {
    const localData = localStorage.getItem("nomList");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("nomList", JSON.stringify(nominatedList));
  }, [nominatedList]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Axios(url);
      const movies = response.data["Search"] || [];
      const uniqueMovies = filterUniqueMovies(movies);
      setSearchResult(uniqueMovies);
    };
    fetchData();
  }, [url]);

  // API sometimes returns duplicates by imdbID, filter to make sure movie list is unique
  const filterUniqueMovies = (movieArr) => {
    let uniqueMovieIDs = new Set(movieArr.map((movie) => movie.imdbID));
    let uniqueMovies = [];
    uniqueMovieIDs.forEach((id) =>
      uniqueMovies.push(movieArr.find((movie) => movie.imdbID === id))
    );
    return uniqueMovies;
  };

  const addItem = (id) => {
    if (nominatedList.length >= 5) {
      return;
    }

    const nominatedMovie = searchResult.find((movie) => movie.imdbID === id);
    // console.log(nominatedMovie);
    const newNominations = [...nominatedList, nominatedMovie];
    setNominatedList(newNominations);
    // console.log("NOMINATED list: ", newNominations);
  };

  const deleteItem = (id) => {
    const filteredNominatedList = nominatedList.filter((movie) => {
      return movie.imdbID !== id;
    });
    setNominatedList(filteredNominatedList);
    // console.log(`REMOVE: removed ${id} from nominated ->`, nominatedList);
  };

  const createNonNominatedList = () =>
    searchResult
      .filter((movie) => {
        return !nominatedList.find(
          (nominatedMovie) => nominatedMovie.imdbID === movie.imdbID
        );
      })
      .sort((a, b) => a.Year - b.Year);

  return (
    <AppContext.Provider
      value={{
        searchResult,
        setSearchResult,
        title,
        setTitle,
        nominatedList,
        setNominatedList,
        url,
        setUrl,
        addItem,
        API_URL,
        deleteItem,
        notNominatedList: createNonNominatedList(),
        onNominateClicked: addItem,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
