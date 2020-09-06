import React, { useContext, useState, useEffect } from "react";
import ListDetail from "./ListDetail";
import { AppContext } from "../contexts/AppContext";
import { ReactSortable } from "react-sortablejs";
import ListFullBanner from "./ListFullBanner";

const NomList = () => {
  const { nominatedList, setNominatedList, deleteItem } = useContext(
    AppContext
  );

  const [submitted, setSubmit] = useState(() => {
    const localData = localStorage.getItem("submitted");
    return localData ? JSON.parse(localData) : false;
  });

  const [reset, setReset] = useState(() => {
    const localData = localStorage.getItem("reset");
    return localData ? JSON.parse(localData) : false;
  });

  useEffect(() => {
    localStorage.setItem("submitted", JSON.stringify(submitted));
  }, [submitted]);

  useEffect(() => {
    localStorage.setItem("reset", JSON.stringify(reset));
  }, [reset]);

  const handleSubmit = () => {
    setSubmit(true);
  };

  const handleReset = () => {
    setReset(true);
    setNominatedList([]);
    setSubmit(false);
  };

  return (
    <div className="nom-container">
      <h5>Nominations</h5>
      <div>
        {submitted === true ? (
          <div className="nomlist-submitted">
            <h2>Your nominations are as follows. May the best movie win!</h2>
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
                  <br />
                  <br />
                  <div className="warning">
                    <em>
                      Please note you won't be able to edit once you submit!
                    </em>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NomList;
