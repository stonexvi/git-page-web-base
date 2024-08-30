// third-party imports
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// CSS
import './Home.css';

function Home() {
  // setup navigation
  const navigate = useNavigate();

  // setup react state
  const [gameId, setGameId] = useState('');
  const [playerName, setPlayerName] = useState('');

  const handleGameIdInputChange = (event) => {
    setGameId(event.target.value);
  }

  const handlePlayerNameInputChange = (event) => {
    setPlayerName(event.target.value);
  }
  
  const joinGame = () => {
    if (gameId && playerName) {
      console.log(`Joining game '${gameId}' as ${playerName}`);

      // navigate to our game page with the game ID and player name in the route
      navigate(`/game/${gameId}/${playerName}`);
    } else {
      console.log('Please provide a game ID and a player name');
    }
  }

  return (
    <div className='container'>
      <h1 className='title'>Homepage Title</h1>
      <div className='container'>
        <label className='gameIdLabel' htmlFor='gameIdInput'>Game ID:</label>
        <input
            type='text'
            id='gameIdInput'
            maxLength='4'
            onChange={handleGameIdInputChange}
          />
        <label className='playerNameLabel' htmlFor='playerNameInput'>Name:</label>
        <input
            type='text'
            id='playerNameInput'
            maxLength='16'
            onChange={handlePlayerNameInputChange}
          />
      </div>
      <button 
        className='join-game-button'
        onClick={ joinGame }>
          Submit
      </button>
    </div>
  );
}

export default Home;
