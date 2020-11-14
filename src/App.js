import './App.css';
import Row from './Row'
import requests from './requests'
import Banner from './Banner'
import Navbar from './Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import WelcomePage from './WelcomePage';


function App() {
  return (
    <div className="app">
      <Router>
        <Switch> 
         
          <Route path = "/homepage">
            <Navbar/>
            <Banner/>

            <Row title = "Netflix Originals" fetchURL = {requests.fetchNetflixOriginals} isLargeRow = {true} />
            <Row title = "Trending Now" fetchURL = {requests.fetchTrending} />
            <Row title = "Top Rates" fetchURL = {requests.fetchTopRated} />
            <Row title = "Action Movies" fetchURL = {requests.fetchActionMovies} />
            <Row title = "Comedy Movies" fetchURL = {requests.fetchComedyMovies} />
            <Row title = "Horror Movies" fetchURL = {requests.fetchHorrorMovies} />
            <Row title = "Romance Movies" fetchURL = {requests.fetchRomanceMovies} />
            <Row title = "Documentories" fetchURL = {requests.fetchDocumentories} />
          </Route>
          <Route path = "/">
            <WelcomePage/>
          </Route>
        </Switch>
      </Router>
      
      
      
    </div>
  );
}

export default App;
