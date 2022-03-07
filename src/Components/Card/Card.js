import styles from './Card.module.css'
import NA from '../../Assets/img/NA.png'


const Card = (props) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.movieImage}>
                {props.poster === "N/A" 
                ? <img src={NA} alt="No movie poster available"/>
                : <img src={props.poster} alt="Movie Poster"/>
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


export default Card;