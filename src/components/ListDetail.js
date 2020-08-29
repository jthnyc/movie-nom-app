import React from "react";

const ListDetail = ({ item, deleteItem }) => {
  return (
    <li className="list-details" onClick={() => deleteItem(item.id)}>
      {/* <div> */}
      <h5 className="card-title">{item.title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{item.year}</h6>
      {/* </div> */}

      {/* <div>
        // <button onClick={() => deleteItem(item.id)}>X</button>
      </div> */}
    </li>
    //   <li className="list-group-item">
    //   <h5 className="card-title">{item.title}</h5>
    //   <h6 className="card-subtitle mb-2 text-muted">{item.year}</h6>
    // </li>
  );
};

export default ListDetail;
