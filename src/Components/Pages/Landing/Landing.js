import {useState, useEffect} from 'react';
import Card from '../../Card/Card';

const Landing = () => {

    const [movie, getMovie] = useState(null);

    useEffect(() => {
        const getData = () => {
            fetch(`https://www.omdbapi.com/?t=The+Last+Samurai&apikey=${process.env.REACT_APP_API_KEY}`)
            .then((response) => response.json())
            .then((data) => getMovie(data));
        }
        getData();
    }, []);


    if(movie == null) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    } else {
        return(
        <Card 
        poster={movie.Poster}
        title={movie.Title}
        released={movie.Released}
        language={movie.Language}
        plot={movie.Plot}
        actors={movie.Actors}
        />
    )}   
}

export default Landing