import React, { useContext, useState } from "react";
import { SearchContext } from "../contexts/SearchContext";
// import NomButton from "./NomButton";

const MovieDetail = ({ title, director, year, id }) => {
  const { addItem } = useContext(SearchContext);
  const [clicked, setClicked] = useState(false);

  const handleClick = (id) => {
    addItem(id);
    setClicked(true);
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
      {/* <NomButton handleClick={handleClick} id={id} /> */}
    </div>
  );
};

export default MovieDetail;
