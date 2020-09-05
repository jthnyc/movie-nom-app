import React from "react";
import starIcon from "../img/starIcon.png";

const ListDetail = ({ item, deleteItem, submitted, key }) => {
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
          {item.Title} ({item.Year})
        </p>
      </div>

      {submitted === true ? (
        <div></div>
      ) : (
        <button onClick={() => handleClick(item.imdbID)}>Remove</button>
      )}
    </li>
  );
};

export default ListDetail;
