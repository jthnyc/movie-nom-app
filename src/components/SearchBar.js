import React, { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";

const SearchBar = () => {
  const { title, setTitle, year, setYear, setUrl, API_URL } = useContext(
    SearchContext
  );

  return (
    <div className="search">
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
    </div>
  );
};

export default SearchBar;
