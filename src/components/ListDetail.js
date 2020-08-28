import React from "react";

const ListDetail = ({ item }) => {
  return (
    <li className="list-details">
      <h5 className="card-title">{item.title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{item.year}</h6>
    </li>
    //   <li className="list-group-item">
    //   <h5 className="card-title">{item.title}</h5>
    //   <h6 className="card-subtitle mb-2 text-muted">{item.year}</h6>
    // </li>
  );
};

export default ListDetail;
