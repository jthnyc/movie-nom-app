import React, { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import magnifying from "../img/magnifying.png";

const SearchBar = () => {
  const { title, setTitle, setUrl, API_URL } = useContext(SearchContext);

  return (
    <div className="search-container">
      <form
        onSubmit={(e) => {
          setUrl(API_URL + `&s=${title}&type=movie`);
          e.preventDefault();
        }}
      >
        <button type="submit" className="search-submit">
          <div className="search-input">
            <label htmlFor="inputTitle">Movie Title</label>
            <div className="search-input-field">
              <img src={magnifying} alt="search" />
              <input
                type="search"
                value={title}
                placeholder="Search Movies"
                onFocus={(e) => (e.target.placeholder = "")}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
