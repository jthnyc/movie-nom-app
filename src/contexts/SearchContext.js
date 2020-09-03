import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

export const SearchContext = createContext();

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `http://omdbapi.com/?apikey=${API_KEY}`;

const SearchContextProvider = (props) => {
  const [movie, setMovie] = useState({ movies: [] });
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [url, setUrl] = useState(API_URL);
  const [list, setList] = useState([]);
  // let [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios(url);
      console.log("RESULT: ", result.data);
      setMovie(result.data);
    };
    fetchData();
  }, [url]);

  const addItem = () => {
    console.log("ADDED ITEM!", movie.Title);
    // if (e.detail === null) {
    setList([
      ...list,
      { title: movie.Title, year: movie.Year, id: movie.imdbID },
    ]);
    // } else {
    //   console.log("clicked more than once!");
    //   alert("Movie already in list!");
    // }
  };

  const deleteItem = (id) => {
    console.log(`REMOVED movie with ID: ${id}`);
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <SearchContext.Provider
      value={{
        movie,
        setMovie,
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
