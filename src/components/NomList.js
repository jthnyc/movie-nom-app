import React, { useContext, useState } from "react";
import ListDetail from "./ListDetail";
import { SearchContext } from "../contexts/SearchContext";
import { ReactSortable } from "react-sortablejs";
import ListFullBanner from "./ListFullBanner";

const NomList = () => {
  const { movieList, setMovieList, list, deleteItem } = useContext(
    SearchContext
  );
  const [submitted, setSubmit] = useState(false);
  // const [disableSort, setDisableSort] = useState(false);
  const nominated = movieList
    ? movieList.filter((movie) => movie.isNominated === true)
    : [];

  console.log("NOMINATED IN NOMLIST: ", nominated);
  const handleSubmit = () => {
    setSubmit(true);
    // setDisableSort(true);
  };

  return (
    <div className="nom-container">
      {/* {console.log("DisableSort is: ", disableSort)} */}
      <h5>Nominations</h5>

      {submitted === true ? (
        <div className="nomlist-submitted">
          <ReactSortable
            list={nominated}
            setList={setMovieList}
            disabled={true}
          >
            {nominated.map((item) => {
              return (
                <ListDetail
                  // title={item.Title}
                  // year={item.Year}
                  item={item}
                  key={item.imdbID}
                  deleteItem={deleteItem}
                  submitted={submitted}
                />
              );
            })}
          </ReactSortable>
          <button>Edit</button>
        </div>
      ) : (
        <div>
          {nominated.length === 5 ? <ListFullBanner /> : ""}
          <div className="nomlist-container">
            <ReactSortable
              list={nominated}
              setList={setMovieList}
              disabled={false}
            >
              {nominated.map((item) => {
                return (
                  <ListDetail
                    // title={item.Title}
                    // year={item.Year}
                    item={item}
                    key={item.imdbID}
                    deleteItem={deleteItem}
                    submitted={submitted}
                  />
                );
              })}
            </ReactSortable>
            {nominated.length === 5 ? (
              <button
                className="list-full-button"
                onClick={handleSubmit}
                disabled={submitted}
              >
                Submit
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NomList;
