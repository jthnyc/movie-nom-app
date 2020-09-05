import React from "react";

const SubmitButton = ({ handleClick, id }) => {
  return (
    <div>
      <button onClick={() => handleClick(id)}>Nominate</button>
    </div>
  );
};

export default SubmitButton;
