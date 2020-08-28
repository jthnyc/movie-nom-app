import React, { createContext, useState } from "react";

export const NomContext = createContext();

const NomContextProvider = (props) => {
  const [list, setList] = useState([
    { title: "harry1", year: "2001", id: "123" },
    { title: "harry2", year: "2002", id: "456" },
  ]);

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <NomContext.Provider value={{ list, removeItem }}>
      {props.children}
    </NomContext.Provider>
  );
};

export default NomContextProvider;
