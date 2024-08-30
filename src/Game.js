// third-party imports
import { useParams } from 'react-router-dom';

// imports
import SingleButton from './components/SingleButton';

// CSS
import './Game.css';

function Game() {
  // get parameters from the URL (we are garanteed to have these by the react router)
  const { gameId, playerId } = useParams();

  // format the parameters to uppercase
  const gameIdFormatted = gameId.toUpperCase();
  const playerIdFormatted = playerId.toUpperCase();

  return (
    <div className='container'>
      <h1 className='title'>Game Page</h1>
      <SingleButton
        params={
          {
            gameId: gameIdFormatted,
            playerId: playerIdFormatted,
            timed: true,
          }
        }
      />
    </div>
  );
};

export default Game;
