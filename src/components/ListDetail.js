import React, { useState } from "react";

const ListDetail = ({ item, deleteItem, submitted }) => {
  const [disabledRemove, setDisableRemove] = useState("false");

  return (
    <li className="nomlist-details">
      {/*onClick={() => deleteItem(item.id)} was on li */}
      <div className="nomlist-details-text">
        <div className="nomlist-details-title">
          <p>{item.title}</p>
        </div>

        <p>({item.year})</p>
      </div>

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
    </li>
  );
};

export default ListDetail;
