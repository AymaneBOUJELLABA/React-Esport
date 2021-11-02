import { useContext, useEffect, useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { VideoGameContext } from '../App';
import { fetchVideoGames } from '../app/gamesAPI';

export default function GameSelect()
{
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false)
  const {currentGame, setCurrentGame} = useContext(VideoGameContext);
  
  const getGames = async () =>
  {
    setLoading(true);
    const data = await fetchVideoGames();
    console.log(data);

    setGames(data);
    setLoading(false);
  }

  const handleChange = (event) =>
  {
    setCurrentGame(event.target.value);
  }

  useEffect(() =>
  {
    getGames();
    
  }, [])

  let content

  if(loading)
  {
    content = <option disabled>Loading...</option>
  }
  else
  {
    content = games.map((el) => (<option key={el.id} value={el.id}>{el.name}</option>))
  }
  return (
    <FloatingLabel controlId="floatingSelect" label="Game Select" style={{color:'black'}}>
        <Form.Select aria-label="Game Select"
                    value={currentGame}
                    onChange={handleChange}
                    placeholder="Select a game">
            <option disabled>List of Games</option>
            {content}
        </Form.Select>
    </FloatingLabel>
  );
}
