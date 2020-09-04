import React, { useContext } from "react";
import ListDetail from "./ListDetail";
import { SearchContext } from "../contexts/SearchContext";
import { ReactSortable } from "react-sortablejs";
import ListFullBanner from "./ListFullBanner";

const NomList = () => {
  const { list, setList, deleteItem } = useContext(SearchContext);

  return (
    <div className="nom-container">
      <h3>Nominations</h3>
      <div>
        {list.length === 5 ? <ListFullBanner /> : ""}
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
        {list.length === 5 ? <button>Submit</button> : ""}
      </div>
    </div>
  );
};

export default NomList;
