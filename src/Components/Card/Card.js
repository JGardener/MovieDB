import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import NA from '../../Assets/img/NA.png'


const Card = (props) => {

    const addToList = () => {
        window.localStorage.setItem(props.id, props.title);
    }

    const removeFromList = () => {
        window.localStorage.removeItem(props.id)
    }

    if(props.url === "/results/specific"){
        return(
            <div className={styles.wrapperFull}>
                <div className={styles.movieInfoFull}>
                    <h3 className={styles.titleFull}>{props.title}</h3>
                    <p className={styles.actors}>Starring: {props.actors}</p>
                    <ul className={styles.infoListFull}>
                        {props.released && <li>Released: <br/>{props.released}</li>}
                        {props.language && <li>Language: <br/>{props.language}</li>}
                        {props.rated && <li>Rated: <br/>{props.rated}</li>}
                        {props.runTime && <li className={styles.runTime}>Runtime: <br/>{props.runTime}</li>}
                        {props.imdbRating && <li className={styles.imdbRating}>Rating: <br/>{props.imdbRating}</li>}
                    </ul>
                    <p className={styles.plot}>{props.plot}</p>
                    <p className={styles.awards}>Awards: {props.awards}</p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.cardButton} onClick={addToList}>Add to Favourites</button>
                        <button className={styles.cardButton} onClick={removeFromList}>Remove from Favourites</button>
                        <a href={`https://www.imdb.com/title/${props.id}/`}><button className={styles.cardButton}>Go to iMDB</button></a>
                        <Link to="/moviedb"><button className={styles.cardButton}>Back to Home</button></Link>
                    </div>    
                </div>
                <div className={styles.movieImageFullContainer}>
                {props.poster === "N/A" 
                    ? <img className={styles.movieImageFull}src={NA} alt="No movie poster available"/>
                    : <img className={styles.movieImageFull}src={props.poster} alt="Movie Poster"/>
                    }
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles.wrapper}>
                <div className={styles.movieImage}>
                    {props.poster === "N/A" 
                    ? <img className={styles.movieImageSearch} src={NA} alt="No movie poster available"/>
                    : <img className={styles.movieImageSearch} src={props.poster} alt="Movie Poster"/>
                    }
                </div>
                <div className={styles.movieInfo}>
                    {props.title && <h1 className={styles.title}>{props.title}</h1>}
                    {props.director === "N/A" || !props.director ? "" : <p className={styles.director}>Director: {props.director}</p>}
                    {props.genre && <p>Genre: {props.genre}</p>}
                    <ul className={styles.infoList}>
                        {props.released && <li>Released: <br/>{props.released}</li>}
                        {props.language && <li>Language: <br/>{props.language}</li>}
                        {props.rated && <li>Rated: <br/>{props.rated}</li>}
                        {props.runTime && <li className={styles.runTime}>Runtime: <br/>{props.runTime}</li>}
                        {props.imdbRating && <li className={styles.imdbRating}>Rating: <br/>{props.imdbRating}</li>}
                    </ul>
                    <p className={styles.plot}>{props.plot}</p>
                    {props.actors && <p className={styles.actors}>Starring: {props.actors}</p>}
                </div>
            </div>
        )
    }
}


export default Card;