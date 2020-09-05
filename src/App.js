import React from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import NomList from "./components/NomList";
import AppContextProvider from "./contexts/AppContext";
import Title from "./components/Title";

const App = () => {
  return (
    <div className="App">
      <AppContextProvider>
        <Title />
        <SearchBar />
        <div className="results-container">
          <MovieList />
          <NomList />
        </div>
      </AppContextProvider>
    </div>
  );
};

export default App;
