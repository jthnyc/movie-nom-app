import React from "react";
import filmIcon from "../img/filmIcon.png";

const MovieDetail = ({ title, year, id, onNominateClicked }) => {
  return (
    <li className="movielist-details">
      <div className="movielist-icon">
        <img src={filmIcon} alt="filmIcon" />
      </div>
      <div className="movie-details-text">
        <p>
          {title} ({year})
        </p>
      </div>
      <button onClick={() => onNominateClicked(id)}>Nominate</button>
    </li>
  );
};

export default MovieDetail;
