import styles from './Card.module.css'
import NA from '../../Assets/img/NA.png'


const Card = (props) => {

    if(props.url === "/results/specific"){
        return(
            <div className={styles.wrapperFull}>
                <div className={styles.movieInfoFull}>
                    <h1 className={styles.titleFull}>{props.title}</h1>
                    <ul className={styles.infoListFull}>
                        {props.released && <li>Released: <br/>{props.released}</li>}
                        {props.language && <li>Language: <br/>{props.language}</li>}
                        {props.rated && <li>Rated: <br/>{props.rated}</li>}
                        {props.runTime && <li className={styles.runTime}>Runtime: <br/>{props.runTime}</li>}
                        {props.imdbRating && <li className={styles.imdbRating}>Rating: <br/>{props.imdbRating}</li>}
                    </ul>
                    <p className={styles.plot}>{props.plot}</p>
                    <p className={styles.actors}>Starring: {props.actors}</p>
                    <p className={styles.awards}>Awards: {props.awards}</p>
                    <p className={styles.boxOffice}>Box Office: {props.boxOffice}</p>
                    

                    <div className={styles.buttonContainer}>

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