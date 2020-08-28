import React from "react";
import SearchBar from "./components/SearchBar";
// import MovieList from "./components/MovieList";
// import NomList from "./components/NomList";
// import NomContextProvider from "./contexts/NomContext";
// import SearchContextProvider from "./contexts/SearchContext";

const App = () => {
  return (
    <div className="App">
      {/* <SearchContextProvider> */}
      <SearchBar />
      {/* <MovieList /> */}
      {/* </SearchContextProvider> */}
      {/* <NomContextProvider> */}
      {/* <NomList /> */}
      {/* </NomContextProvider> */}
    </div>
  );
};

export default App;

// const App = () => {
//   // const [movie, setMovie] = useState({ movies: [] });
//   // const [title, setTitle] = useState("");
//   // const [year, setYear] = useState("");
//   // const [url, setUrl] = useState(`http://omdbapi.com/?apikey=`);
//   // const [list, setList] = useState([]);

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     const result = await axios(url);
//   //     console.log("RESULT: ", result.data);
//   //     // const { Title, Director, Year, Poster } = result.data;
//   //     setMovie(result.data);
//   //   };
//   //   fetchData();
//   // }, [url]);

//   return (
//     <div className="container">
//       <Fragment>
//         <form
//           onSubmit={(e) => {
//             setUrl(`http://omdbapi.com/?apikey=[]&t=${title}&y=${year}`);
//             e.preventDefault();
//           }}
//         >
//           <div className="form-group">
//             <label htmlFor="inputTitle">Movie Title</label>
//             <input
//               type="text"
//               value={title}
//               className="form-control"
//               onChange={(e) => setTitle(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="inputYear">Year</label>
//             <input
//               type="text"
//               value={year}
//               className="form-control"
//               onChange={(e) => setYear(e.target.value)}
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Search
//           </button>
//         </form>
//         <MovieList />
//         {/* <div className="card-body">
//           <ul>
//             <MovieDetail movie={movie} />
//           </ul>
//         </div> */}
//         <div>
//           <h3>Nominees</h3>
//           <ul className="list-group">
//             <li className="list-group-item">{}</li>
//           </ul>
//         </div>
//       </Fragment>
//     </div>
//   );
// };

// export default App;

// class App extends Component {
//   state = { movies: [] };

//   componentDidMount() {
//     this.fetchMovies();
//   }

//   fetchMovies = () => {
//     axios
//       .get("&t=harry&potter")
//       .then((response) => {
//         console.log(response.data.Title);
//         const { Title, Director, Actors, Year, Poster } = response.data;
//         console.log("data: ", Title, Director, Actors, Year, Poster);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>Movie Search</h1>
//       </div>
//     );
//   }
// }

// export default App;

// axios
//   .get("http://omdbapi.com/?apikey=[]&t=harry+potter")
//   .then((response) => {
//     const { Title, Director, Actors, Year } = response.data;
//     console.log("type of data: ", typeof JSON.stringify(Title));
//     // const movie = {
//     //   title: Title,
//     // };
//     // setMovie({ title: Title });
//   })
//   .catch(
//     (error) => {
//       console.log(error);
//     },
//     [movie]
//   );
