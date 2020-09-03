import React, { useContext } from "react";
import ListDetail from "./ListDetail";
import { SearchContext } from "../contexts/SearchContext";
import { ReactSortable } from "react-sortablejs";

const NomList = () => {
  const { list, setList, deleteItem } = useContext(SearchContext);

  return (
    <div className="nom-container">
      <h3>Nominations</h3>
      <div>
        <ReactSortable
          list={list}
          setList={setList}
          delayOnTouchStart={true}
          delay={2}
        >
          {list.map((item) => {
            return (
              <ListDetail
                item={item}
                key={item.imdbID}
                deleteItem={deleteItem}
              />
            );
          })}
        </ReactSortable>
      </div>
    </div>
  );
};

export default NomList;
