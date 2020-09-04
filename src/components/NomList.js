import React, { useContext, useState } from "react";
import ListDetail from "./ListDetail";
import { SearchContext } from "../contexts/SearchContext";
import { ReactSortable } from "react-sortablejs";
import ListFullBanner from "./ListFullBanner";

const NomList = () => {
  const { list, setList, deleteItem } = useContext(SearchContext);
  const [submitted, setSubmit] = useState(false);
  const [canSort, setCanSort] = useState(true);

  const handleSubmit = () => {
    setSubmit(true);
    setCanSort(false);
  };

  return (
    <div className="nom-container">
      {console.log("SUBMITTED IN RETURN: ", submitted)}
      {console.log("canSort IN RETURN: ", canSort)}
      <h3>Nominations</h3>
      <div>
        {list.length === 5 ? <ListFullBanner /> : ""}
        <ReactSortable list={list} setList={setList} disabled={canSort}>
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
        {list.length === 5 ? (
          <button onClick={handleSubmit} disabled={submitted}>
            Submit
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default NomList;
