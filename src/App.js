import './App.css';
import AppHeader from './components/AppHeader';
import LeaguesList from './components/Leagues/LeaguesList';


import { Route, Switch } from 'react-router-dom'
import NotFound from './components/NotFound';
import LeagueDetails from './components/Leagues/LeagueDetails';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <AppHeader />
      </div>
      
      <div className="App-body">
        <Switch>
          <Route path="/leagues/:id">
            <LeagueDetails/>
          </Route>
          <Route path="/leagues">
            <LeaguesList />
          </Route>
          
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
