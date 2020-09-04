import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

export const SearchContext = createContext();

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `http://omdbapi.com/?apikey=${API_KEY}&results=10`;

const SearchContextProvider = (props) => {
  const [movieList, setMovieList] = useState([]);
  /**
   *  {
   *    title, plot, year, isNominated
   * }
   */
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState(API_URL);
  const [list, setList] = useState(() => {
    const localData = localStorage.getItem("nomList");
    return localData ? JSON.parse(localData) : [];
  });
  // const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Axios(url);

      let movies = response.data["Search"];
      if (movies !== undefined) {
        movies = movies.map((movie) => {
          return {
            ...movie,
            isNominated: false,
          };
        });
      }

      // let foo = {a: 'A', b: 'B', c: 'C'};
      // let res = {...foo, c:'D'};
      // console.log(res)

      // [...] => [..., isNominated]

      console.log("RESULT: ", movies);
      setMovieList(movies);
    };
    fetchData();
  }, [url]);

  useEffect(() => {
    localStorage.setItem("nomList", JSON.stringify(list));
  }, [list]);

  const addItem = (id) => {
    // flip isNominated to true
    console.log("ID IN ADD: ", id);

    const newMovieList = movieList.map((movie) => {
      if (movie.imdbID === id) {
        movie.isNominated = true;
      }
      return movie;
    });

    setMovieList(newMovieList);
    console.log("NOMINATE: updated nominated: ", movieList);

    // const movieToAdd = movieList.filter((movie) => movie.imdbID === id)[0];
    // console.log("ADDED ITEM!", movieToAdd.Title);
    // setList([
    //   ...list,
    //   {
    //     title: movieToAdd.Title,
    //     year: movieToAdd.Year,
    //     id: movieToAdd.imdbID,
    //   },
    // ]);
  };

  const deleteItem = (id) => {
    // flip isNominated to false
    const newMovieList = movieList.map((movie) => {
      if (movie.imdbID === id) {
        movie.isNominated = false;
      }
      return movie;
    });
    setMovieList(newMovieList);
    console.log(`REMOVE: removed ${id} from nominated -> , ${movieList}`);
    // console.log(`REMOVED movieList with ID: ${id}`);
    // setList(list.filter((item) => item.id !== id));
    // setMovieList()
  };

  return (
    <SearchContext.Provider
      value={{
        movieList,
        setMovieList,
        title,
        setTitle,
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
