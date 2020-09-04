import React, { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";

const SearchBar = () => {
  const { title, setTitle, year, setYear, setUrl, API_URL } = useContext(
    SearchContext
  );

  return (
    <div className="search-container">
      <form
        onSubmit={(e) => {
          setUrl(API_URL + `&s=${title}&y=${year}&type=movie`);
          e.preventDefault();
        }}
      >
        <button type="submit" className="search-submit">
          <div className="search-input">
            <label htmlFor="inputTitle">Movie Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          {/* <div className="form-group">
          <label htmlFor="inputYear">Year (Optional)</label>
          <input
            type="text"
            value={year}
            className="form-control"
            onChange={(e) => setYear(e.target.value)}
          />
        </div> */}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
