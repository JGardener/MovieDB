import {useEffect, useState} from 'react';
import Card from '../../Components/Card/Card'
import styles from './List.module.css'
import { Link } from 'react-router-dom';

const List = () => {

    const [list, updateList] = useState([]);

    const compare = (a, b) => {
        if(a.Title < b.Title) {
            return -1;
        }
        if(a.Title > b.Title){
            return 1;
        }
        return 0;
    }
    
    useEffect(() => {
        
        const getStorage = () => {
            for(let i = 0; i < window.localStorage.length; i++){
                let key = localStorage.key(i);
                fetch(`https://www.omdbapi.com/?t=${window.localStorage.getItem(key).replace(/\s/g, '+')}&apikey=${process.env.REACT_APP_API_KEY}`)
                .then((response) => response.json())
                .then((data) => updateList(prevState => [...prevState, data]));
            }            
        }
        getStorage();
    }, []);

<<<<<<< HEAD
    if(list.length === 0){
        return null;
=======
    // console.log(list);

    if(list.length === 0){
        return(<p>Loading</p>)
>>>>>>> 6085d1c8138a581e347e6a97b0a7423ed138fd84
    }
    else {
        return (
            <div> 
            <h4>Your Favourites: </h4>    
            <div className={styles.wrapper}>
                {list.map(item => {
                    return(
                        <Link 
                            key={item.imdbID} 
                            to={'/results/specific'}
                            state={{movie: item.imdbID}}
                            style={{textDecoration:'none'}}>
                                <Card 
                                    poster={item.Poster}
                                    title={item.Title}
                                    released={item.Year}
                                />                        
                        </Link>                      
                    )})}                        
            </div>
            </div>
        )
    }
}

export default List;