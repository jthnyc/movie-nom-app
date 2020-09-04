import React, { useState } from "react";
import starIcon from "../img/starIcon.png";

const ListDetail = ({ item, deleteItem, submitted }) => {
  const [disabledRemove, setDisableRemove] = useState("false");

  return (
    <li className="nomlist-details">
      {/*onClick={() => deleteItem(item.id)} was on li */}
      <span>
        <img src={starIcon} alt="filmIcon" />
      </span>
      <div className="nomlist-details-text">
        <p>
          {item.title} ({item.year})
        </p>
      </div>

      {submitted === true ? (
        <div></div>
      ) : (
        <button
          onClick={
            submitted
              ? () => {
                  console.log("can't delete");
                  setDisableRemove("true");
                }
              : () => deleteItem(item.id)
          }
          disable={disabledRemove}
        >
          Remove
        </button>
      )}
    </li>
  );
};

export default ListDetail;
