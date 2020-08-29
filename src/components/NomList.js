import React, { useContext } from "react";
import ListDetail from "./ListDetail";
import { SearchContext } from "../contexts/SearchContext";
import { Container, Draggable } from "react-smooth-dnd";

const NomList = () => {
  const { list, deleteItem } = useContext(SearchContext);
  return (
    <div className="nom-container">
      <h3>Nominees</h3>
      {/* <ul className="list-container">
        {list.length >= 1 ? (
          list.map((item) => (
            <ListDetail item={item} key={item.id} deleteItem={deleteItem} />
          ))
        ) : (
          <em>You know nothing, Jo Snow</em>
        )}
      </ul> */}
      <div>
        <Container>
          {list.map((item) => {
            return (
              <Draggable>
                <ListDetail item={item} key={item.id} deleteItem={deleteItem} />
              </Draggable>
            );
          })}
        </Container>
      </div>
    </div>
  );
};

export default NomList;
