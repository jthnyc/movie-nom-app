import React, { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import filmIcon from "../img/filmIcon.png";

const MovieDetail = ({ title, year, id, isDisabled }) => {
  const { addItem, movieList } = useContext(SearchContext);
  // const [clicked, setClicked] = useState(false);
  let nominated = movieList
    ? movieList.filter((movie) => movie.isDisabled === true)
    : [];

  const handleClick = (id) => {
    if (nominated.length < 5) {
      addItem(id);
      // setClicked(true);
    }
  };

  return (
    <li className="movielist-details">
      <span>
        <img src={filmIcon} alt="filmIcon" />
      </span>
      <div className="movie-details-text">
        <p>
          {title} ({year})
        </p>
      </div>
      <button onClick={() => handleClick(id)} disabled={isDisabled}>
        Nominate
      </button>
    </li>
  );
};

export default MovieDetail;
