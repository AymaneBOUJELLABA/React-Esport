import React , { createContext, useEffect, useState }from 'react';
import './App.css';

import AppHeader from './components/AppHeader';
import LeaguesList from './components/leagues/LeaguesList';
import { Route, Switch } from 'react-router-dom'
import NotFound from './components/NotFound';
import LeagueDetails from './components/leagues/LeagueDetails';
import HomePage from './components/HomePage';
import TeamsList from './components/teams/TeamsList';
import TeamDetails from './components/teams/TeamDetails';

export const VideoGameContext = createContext({
  currentGame: 0,
  setCurrentGame : (game) => {}
})

function App()
{
  const [currentGame, setCurrentGame] = useState(()=>{

    const saved = localStorage.getItem('currentGame');
    const initialValue = JSON.parse(saved);

    return initialValue || 1;
  });

  useEffect(() => {
    localStorage.setItem('currentGame',JSON.stringify(currentGame))
  }, [currentGame])
  return (
    <VideoGameContext.Provider value={{currentGame,setCurrentGame}}>
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
            <Route path="/teams/:id">
              <TeamDetails/>
            </Route>
            <Route path="/teams">
              <TeamsList />
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
    </VideoGameContext.Provider>    
  );
}

export default App;
