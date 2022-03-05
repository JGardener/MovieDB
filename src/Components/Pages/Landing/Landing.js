import styles from './Landing.module.css'
import Search from '../../Search/Search'

const Landing = () => {

        return(
            <div className={styles.wrapper}>
                <h1>Welcome to MovieDB</h1>
                <p>Please search for a movie</p>
                <Search />
            </div> 
        )
    
}

export default Landing