// import React, { createContext, useState, useContext } from "react";

// export const SearchContext = createContext();

// const SearchContextProvider = (props) => {
//   const [movie, setMovie] = useState({ movies: [] });
//   const [title, setTitle] = useState("");
//   const [year, setYear] = useState("");
//   const [url, setUrl] = useState(`http://omdbapi.com/?apikey=[]&t=`);

//   return (
//     <SearchContext.Provider
//       value={{
//         movie,
//         setMovie,
//         title,
//         setTitle,
//         year,
//         setYear,
//         url,
//         setUrl,
//       }}
//     >
//       {props.children}
//     </SearchContext.Provider>
//   );
// };

// export default SearchContextProvider;
