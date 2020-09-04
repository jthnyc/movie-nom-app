import React, { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";

const SubmitButton = ({ handleClick, id }) => {
  const { clicked } = useContext(SearchContext);
  return (
    <div>
      <button onClick={() => handleClick(id)} disabled={clicked}>
        Nominate
      </button>
    </div>
  );
};

export default SubmitButton;