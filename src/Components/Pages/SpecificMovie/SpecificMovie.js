import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../../Card/Card";
import styles from "./SpecificMovie.module.css";

const SpecificMovie = () => {
  const [movie, updateMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const getMovie = () => {
      fetch(
        `https://www.omdbapi.com/?i=${location.state.movie}&plot=full&apikey=${process.env.REACT_APP_API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => updateMovie(data));
    };
    getMovie();
  }, []);

  if (movie == null) {
    return <p>Loading</p>;
  } else {
    return (
      <div>
        <div>
          <Card
            poster={movie.Poster}
            title={movie.Title}
            director={movie.Director}
            genre={movie.Genre}
            released={movie.Released}
            language={movie.Language}
            rated={movie.Rated}
            actors={movie.Actors}
            plot={movie.Plot}
            runTime={movie.Runtime}
            imdbRating={movie.imdbRating}
            awards={movie.Awards}
            boxOffice={movie.BoxOffice}
            country={movie.Country}
            url={location.pathname}
            id={movie.imdbID}
          />
        </div>
      </div>
    );
  }
};

export default SpecificMovie;
