import React, { useContext, useState } from "react";
import ListDetail from "./ListDetail";
import { SearchContext } from "../contexts/SearchContext";
import { ReactSortable } from "react-sortablejs";
import ListFullBanner from "./ListFullBanner";

const NomList = () => {
  const { list, setList, deleteItem } = useContext(SearchContext);
  const [submitted, setSubmit] = useState(false);
  const [disableSort, setDisableSort] = useState(false);

  const handleSubmit = () => {
    setSubmit(true);
    setDisableSort(true);
  };

  return (
    <div className="nom-container">
      {/* {console.log("DisableSort is: ", disableSort)} */}
      <h3>Nominations</h3>
      <div>
        {list.length === 5 ? <ListFullBanner /> : ""}
        {disableSort === true ? (
          <ReactSortable list={list} setList={setList} disabled={true}>
            {list.map((item) => {
              return (
                <ListDetail
                  item={item}
                  key={item.id}
                  deleteItem={deleteItem}
                  submitted={submitted}
                />
              );
            })}
          </ReactSortable>
        ) : (
          <ReactSortable list={list} setList={setList} disabled={false}>
            {list.map((item) => {
              return (
                <ListDetail
                  item={item}
                  key={item.id}
                  deleteItem={deleteItem}
                  submitted={submitted}
                />
              );
            })}
          </ReactSortable>
        )}

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
