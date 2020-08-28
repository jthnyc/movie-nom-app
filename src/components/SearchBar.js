import React, { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import Axios from "axios";
import NomList from "./NomList";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `http://omdbapi.com/?apikey=${API_KEY}`;

const SearchBar = () => {
  const [list, setList] = useState([]);
  const [movie, setMovie] = useState({ movies: [] });
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [url, setUrl] = useState(API_URL);

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
    setList([
      ...list,
      { title: movie.Title, year: movie.Year, id: movie.imdbID },
    ]);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          setUrl(API_URL + `&t=${title}&y=${year}`);
          e.preventDefault();
        }}
      >
        <div className="form-group">
          <label htmlFor="inputTitle">Movie Title</label>
          <input
            type="text"
            value={title}
            className="form-control"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputYear">Year</label>
          <input
            type="text"
            value={year}
            className="form-control"
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
      <MovieList movie={movie} addItem={addItem} />
      <NomList list={list} />
    </div>
  );
};

export default SearchBar;
