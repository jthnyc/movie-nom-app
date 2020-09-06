import React from "react";
import starIcon from "../img/starIcon.png";

const ListDetail = ({ title, year, imdbID, deleteItem, submitted }) => {
  return (
    <li className="nomlist-details">
      <div className="nomlist-icon">
        <img src={starIcon} alt="starIcon" />
      </div>
      <div className="nomlist-details-text">
        <p>
          {title} ({year})
        </p>
      </div>

      {submitted === true ? (
        <div></div>
      ) : (
        <button onClick={() => deleteItem(imdbID)}>X</button>
      )}
    </li>
  );
};

export default ListDetail;
