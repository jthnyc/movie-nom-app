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
    <div className="movie-details">
      {/* <img src={poster} alt="" /> */}
      <h5 className="movie-title">{title}</h5>
      <h6 className="movie-director">{director}</h6>
      <p className="movie-year">{year}</p>
      <button onClick={() => handleClick(id)} disabled={clicked}>
        Nominate
      </button>
    </div>
  );
};

export default MovieDetail;
