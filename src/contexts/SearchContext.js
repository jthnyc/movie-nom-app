import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

export const SearchContext = createContext();

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `http://omdbapi.com/?apikey=${API_KEY}&results=10`;

const SearchContextProvider = (props) => {
  const [movieList, setMovieList] = useState([]);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [url, setUrl] = useState(API_URL);
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Axios(url);
      const movies = response.data["Search"];
      // console.log("RESULT: ", movies);
      setMovieList(movies);
    };
    fetchData();
  }, [url]);

  const addItem = (id) => {
    console.log("ID IN ADD: ", id);
    const movieToAdd = movieList.filter((movie) => movie.imdbID === id)[0];
    console.log("ADDED ITEM!", movieToAdd);

    // if (e.detail === null) {
    setList([
      ...list,
      {
        title: movieToAdd.Title,
        year: movieToAdd.Year,
        id: movieToAdd.imdbID,
      },
    ]);
    // } else {
    //   console.log("clicked more than once!");
    //   alert("movieList already in list!");
    // }
  };

  const deleteItem = (id) => {
    console.log(`REMOVED movieList with ID: ${id}`);
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <SearchContext.Provider
      value={{
        movieList,
        setMovieList,
        title,
        setTitle,
        year,
        setYear,
        url,
        setUrl,
        list,
        setList,
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
