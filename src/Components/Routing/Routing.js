import {
    BrowserRouter as Router, 
    Routes, 
    Route, 
    Link 
} from 'react-router-dom';

import Landing from '../Pages/Landing/Landing';
import SearchResults from '../Pages/SearchResults/SearchResults';
import SpecificMovie from '../Pages/SpecificMovie/SpecificMovie';

const Routing = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Landing />}/>
                <Route path="/results" element={<SearchResults/>}/>
                <Route path="/results/specific" element={<SpecificMovie/>}/>
            </Routes>
        </Router>
    )
}

export default Routing;