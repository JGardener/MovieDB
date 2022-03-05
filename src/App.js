import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Card from './Components/Card/Card';
import Landing from './Components/Pages/Landing/Landing';
import SearchResults from './Components/Pages/SearchResults/SearchResults';

function App() {
  return (
    <div className="App">
      <SearchResults />
    </div>
  );
}

export default App;
