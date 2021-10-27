import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import './App.css';
import LeaguesList from './components/LeaguesList';


function App() {
  return (
    <div className="App">
       <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E-Sport Leagues
          </Typography>
        </Toolbar>
      </AppBar>

      <LeaguesList />
    </div>
  );
}

export default App;
