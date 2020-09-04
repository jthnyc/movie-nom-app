import React from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import NomList from "./components/NomList";
import SearchContextProvider from "./contexts/SearchContext";
import Title from "./components/Title";

const App = () => {
  return (
    <div className="App">
      <SearchContextProvider>
        <Title />
        <div className="search-container">
          <SearchBar />
          <MovieList />
        </div>
        <NomList />
      </SearchContextProvider>
    </div>
  );
};

export default App;
