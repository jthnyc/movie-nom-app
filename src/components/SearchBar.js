import React, { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import Axios from "axios";

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

  useEffect(() => {
    console.log(`List is now ${list.length} movie/s long, list: ${list}`);
  });

  // useEffect(() => {
  //   const addItem = () => {
  //     console.log("ADDED ITEM!", movie.Title);
  //     setList([
  //       ...list,
  //       { title: movie.Title, year: movie.Year, id: movie.imdbID },
  //     ]);
  //     console.log("NOMLIST: ", list);
  //   };
  //   addItem();
  // }, [list]);

  // const addItem = () => {
  //   console.log("ADDED ITEM!", movie.Title);
  //   setList([
  //     ...list,
  //     { title: movie.Title, year: movie.Year, id: movie.imdbID },
  //   ]);
  //   console.log("NOMLIST: ", list);
  // };

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
      <MovieList
        movie={movie}
        addItem={() =>
          setList([
            ...list,
            { title: movie.Title, director: movie.Director, id: movie.imdbID },
          ])
        }
      />
      <div>
        <h3>Nominees</h3>
        {/* {console.log("LIST: ", list[0])} */}
        {/* {console.log("Title: ", list[0].title)} */}
        <ul>
          {list.length >= 1 ? (
            list.map((item) => <li key={item.id}>{item.title}</li>)
          ) : (
            <em>You know nothing, Jo Snow</em>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
