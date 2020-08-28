import React, { useContext } from "react";
import ListDetail from "./ListDetail";
import { SearchContext } from "../contexts/SearchContext";

const NomList = () => {
  const { list } = useContext(SearchContext);
  return (
    <div>
      <h3>Nominees</h3>
      <ul>
        {list.length >= 1 ? (
          list.map((item) => <ListDetail item={item} key={item.id} />)
        ) : (
          <em>You know nothing, Jo Snow</em>
        )}
      </ul>
    </div>
  );
};

export default NomList;
