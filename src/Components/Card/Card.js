import styles from './Card.module.css'
import {useState, useEffect} from 'react';

const Card = () => {
const [movie, getMovie] = useState(null)
    useEffect(() => {
        const getData = () => {
            fetch(`https://www.omdbapi.com/?t=The+Last+Samurai&apikey=${process.env.REACT_APP_API_KEY}`)
            .then((response) => response.json())
            .then((data) => getMovie(data));
        }
        getData();
    }, []);

    console.log(movie);

    if(movie == null) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    } else {
        return (
            <div className={styles.wrapper}>
                <div className={styles.movieImage}>
                    <img src={movie.Poster} alt="Movie Poster"/>
                </div>
                <div className={styles.movieInfo}>
                    <h1 className={styles.title}>{movie.Title}</h1>
                    <p className={styles.director}>{movie.Director}</p>
                    <ul className={styles.infoList}>
                        <li>Released: <br/>{movie.Released}</li>
                        <li>Language: <br/>{movie.Language}</li>
                        <li>Rated: <br/>{movie.Rated}</li>
                    </ul>
                    <p className={styles.plot}>{movie.Plot}</p>
                    <p className={styles.actors}>Starring: {movie.Actors}</p>

                </div>
            </div>
        )
    }
}

export default Card;