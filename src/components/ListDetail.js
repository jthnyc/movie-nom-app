import React from "react";
import starIcon from "../img/starIcon.png";

const ListDetail = ({ item, deleteItem, submitted, key }) => {
  // const [disabledRemove, setDisableRemove] = useState("false");
  console.log("ITEM IN LIST DETAIL: ", item);

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
        <button
          onClick={() => handleClick(item.imdbID)}
          // disable={disabledRemove}
        >
          Remove
        </button>
      )}
    </li>
  );
};

export default ListDetail;
