import React from "react";
import starIcon from "../img/starIcon.png";

const ListDetail = ({ title, year, imdbID, deleteItem, submitted }) => {
  const handleClick = (id) => {
    deleteItem(id);
  };

  return (
    <li className="nomlist-details">
      <span>
        <img src={starIcon} alt="starIcon" />
      </span>
      <div className="nomlist-details-text">
        <p>
          {title} ({year})
        </p>
      </div>

      {submitted === true ? (
        <div></div>
      ) : (
        <button onClick={() => handleClick(imdbID)}>X</button>
      )}
    </li>
  );
};

export default ListDetail;
