import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

export const SearchContext = createContext();

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `http://omdbapi.com/?apikey=${API_KEY}&results=10`;

const SearchContextProvider = (props) => {
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
      const movies = response.data["Search"] || []; // null coalesing
      setSearchResult(movies);
    };
    fetchData();
  }, [url]);

  const addItem = (id) => {
    // flip isNominated to true
    console.log("ID IN ADD: ", id);
    // const updatedListWithNominated = searchResult.map((movie) => {
    //   if (movie.imdbID === id) {
    //     movie.isNominated = true;
    //   }
    //   return movie;
    // });

    const nominatedMovie = searchResult.find((movie) => movie.imdbID === id);
    console.log(nominatedMovie);
    // how to isolate this portion and get unique movies? not adding the same movie twice
    const newNominations = [...nominatedList, nominatedMovie];
    setNominatedList(newNominations);
    console.log("NOMINATED list: ", newNominations);
  };

  const deleteItem = (id) => {
    // flip isNominated to false
    const filteredNominatedList = nominatedList.filter((movie) => {
      return movie.imdbID !== id;
    });
    setNominatedList(filteredNominatedList);
    console.log(`REMOVE: removed ${id} from nominated ->`, nominatedList);
  };

  return (
    <SearchContext.Provider
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
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
