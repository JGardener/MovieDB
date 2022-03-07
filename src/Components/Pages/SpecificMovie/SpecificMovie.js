import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../../Card/Card";

const SpecificMovie = () => {
    const [movie, updateMovie] = useState(null); 
    const location = useLocation();
    console.log(location);
    
    useEffect(() => {
        const getMovie = () => {
            fetch(`http://www.omdbapi.com/?i=${location.state.movie}&plot=full&apikey=${process.env.REACT_APP_API_KEY}`)
            .then((response) => response.json())
            .then((data) => updateMovie(data))
        }
        getMovie();

    })

    console.log(movie)


    if(movie == null){
        return(
            <p>Loading</p>
        )
    } else {

        return (
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
                />
            </div>
        )
    }
}

export default SpecificMovie;