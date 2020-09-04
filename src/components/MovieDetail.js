import React, { useContext, useState } from "react";
import { SearchContext } from "../contexts/SearchContext";

const MovieDetail = ({ title, director, year, id }) => {
  const { addItem, list } = useContext(SearchContext);
  const [clicked, setClicked] = useState(false);

  const handleClick = (id) => {
    if (list.length < 5) {
      addItem(id);
      setClicked(true);
    }
  };

  return (
    <li className="movie-details">
      <div className="movie-details-text">
        <p className="movie-title">{title}</p>
        <p className="movie-year">({year})</p>
      </div>
      <button onClick={() => handleClick(id)} disabled={clicked}>
        Nominate
      </button>
    </li>
  );
};

export default MovieDetail;
