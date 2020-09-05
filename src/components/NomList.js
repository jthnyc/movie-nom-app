import React, { useContext, useState, useEffect } from "react";
import ListDetail from "./ListDetail";
import { SearchContext } from "../contexts/SearchContext";
import { ReactSortable } from "react-sortablejs";
import ListFullBanner from "./ListFullBanner";

const NomList = () => {
  const { nominatedList, setNominatedList, deleteItem } = useContext(
    SearchContext
  );
  const [submitted, setSubmit] = useState(() => {
    const localData = localStorage.getItem("submitted");
    return localData ? JSON.parse(localData) : false;
  });
  const [reset, setReset] = useState(false);

  // console.log("NOMINATED IN NOMLIST: ", nominatedList);
  const handleSubmit = () => {
    setSubmit(true);
  };

  const handleReset = () => {
    setReset(true);
    setNominatedList([]);
  };

  useEffect(() => {
    localStorage.setItem("submitted", JSON.stringify(submitted));
  }, [submitted]);

  return (
    <div className="nom-container">
      <h5>Nominations</h5>

      {reset === true ? (
        <div>
          <ReactSortable
            list={nominatedList}
            setList={setNominatedList}
            disabled={false}
          >
            {nominatedList.map((item) => {
              return (
                <ListDetail
                  title={item.Title}
                  year={item.Year}
                  imdbID={item.imdbID}
                  key={item.imdbID}
                  deleteItem={deleteItem}
                  submitted={submitted}
                />
              );
            })}
          </ReactSortable>
        </div>
      ) : (
        <div>
          {submitted === true ? (
            <div className="nomlist-submitted">
              <p>Your nominations as follows. May the best movie win!</p>
              <ReactSortable
                list={nominatedList}
                setList={setNominatedList}
                disabled={true}
              >
                {nominatedList.map((item) => {
                  return (
                    <ListDetail
                      title={item.Title}
                      year={item.Year}
                      imdbID={item.imdbID}
                      item={item}
                      key={item.imdbID}
                      deleteItem={deleteItem}
                      submitted={submitted}
                    />
                  );
                })}
              </ReactSortable>
              <button
                type="submit"
                className="list-full-button"
                onClick={handleReset}
              >
                Make Another Submission
              </button>
            </div>
          ) : (
            <div>
              {nominatedList.length === 5 ? <ListFullBanner /> : ""}
              <div className="nomlist-container">
                <ReactSortable
                  list={nominatedList}
                  setList={setNominatedList}
                  disabled={false}
                >
                  {nominatedList.map((item) => {
                    return (
                      <ListDetail
                        title={item.Title}
                        year={item.Year}
                        imdbID={item.imdbID}
                        key={item.imdbID}
                        deleteItem={deleteItem}
                        submitted={submitted}
                      />
                    );
                  })}
                </ReactSortable>
                {nominatedList.length === 5 ? (
                  <div>
                    <button
                      type="submit"
                      className="list-full-button"
                      onClick={handleSubmit}
                      disabled={submitted}
                    >
                      Submit
                    </button>
                    <em>
                      Please note you won't be able to edit once you submit!
                    </em>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NomList;
