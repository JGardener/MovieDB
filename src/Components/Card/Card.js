import styles from './Card.module.css'
import NA from '../../Assets/img/NA.png'


const Card = (props) => {

    let poster = false;

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
                {props.director && <p className={styles.director}>{props.director}</p>}
                <ul className={styles.infoList}>
                    {props.released && <li>Released: <br/>{props.released}</li>}
                    {props.language && <li>Language: <br/>{props.language}</li>}
                    {props.rated && <li>Rated: <br/>{props.rated}</li>}
                </ul>
                <p className={styles.plot}>{props.plot}</p>
                {props.actors && <p className={styles.actors}>Starring: {props.actors}</p>}
            </div>
        </div>
    )
}


export default Card;