import styles from './Landing.module.css'
import Search from '../../Search/Search'
import List from '../../List/List'

const Landing = () => {

        return(
            <div className={styles.wrapper}>
                <h1>Welcome to MovieDB</h1>
                <p>This application is not yet finished. Design theme and invidiual component design is to be completed.</p>
                <p>Please search for a movie</p>
                <Search />
                <List />
            </div> 
        )
    
}

export default Landing