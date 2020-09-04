import React, { useState } from "react";

const ListDetail = ({ item, deleteItem, submitted }) => {
  const [disabledRemove, setDisableRemove] = useState("false");

  return (
    <li className="list-details">
      {/*onClick={() => deleteItem(item.id)} was on li */}
      <h5 className="card-title">{item.title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{item.year}</h6>
      <button
        className="nom-list-remove"
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
