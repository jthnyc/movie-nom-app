import React, { useContext, useState } from "react";
import { SearchContext } from "../contexts/SearchContext";
import filmIcon from "../img/filmIcon.png";

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
    <li className="movielist-details">
      <span>
        <img src={filmIcon} alt="filmIcon" />
      </span>
      <div className="movie-details-text">
        <p>
          {title} ({year})
        </p>
      </div>
      <button onClick={() => handleClick(id)} disabled={clicked}>
        Nominate
      </button>
    </li>
  );
};

export default MovieDetail;
