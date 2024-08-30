// third-party imports
import React, { useState, useEffect, useCallback } from 'react';
import { ReactComponent as Arrow } from '../svg/Arrow.svg';

// CSS
import './SingleButton.css';

const directionToSprite = {
  'left': <Arrow className='sprite-arrow-left'/>,
  'right': <Arrow className='sprite-arrow-right'/>,
  'move-up': <Arrow className='sprite-arrow-up'/>,
  'move-down': <Arrow className='sprite-arrow-down'/>,
};

function SingleButton({ 
  params,
}) {
  // get custom info from the protocol object
  const {
    gameId,
    playerId,

    // should the direction change on a timer (default is false)
    timed = false,
  } = params;

  const getButtonState = () => {
    // get all direction objects
    const directions = Object.keys(directionToSprite);

    // get a random direction and the corresponding sprite
    const direction = directions[Math.floor(Math.random() * directions.length)];
    const sprite = directionToSprite[direction];

    // get the  state
    return {
      direction,
      sprite,
    }
  };

  const {
    direction: initialDirection,
    sprite: initialSprite,
  } = getButtonState();

  const [buttonDirection, setButtonDirection] = useState(initialDirection);
  const [buttonSprite, setButtonSprite] = useState(initialSprite);

  // change the randmButtonState every 2 seconds
  useEffect(() => {
    let interval;

    if (timed) {
      interval = setInterval(() => {
        setButtonState();
      }, 2000);
    }

    return () => clearInterval(interval);
  }, [timed]);

  const setButtonState = () => {
    // get a  button state
    const {
      direction,
      sprite,
    } = getButtonState();

    console.log('Setting  Button State:', {direction, sprite});
    
    // set the button state
    setButtonDirection(direction);
    setButtonSprite(sprite);
  };

  const handleButtonReleased = () => {
    // log the direction
    console.log(`Button pressed by ${playerId} for game '${gameId}' and with direction: ${buttonDirection}`);

    // reset button state
    setButtonState();
  };

  return (
    <div className="container">
      <div className="sprite-button" onTouchEnd={ handleButtonReleased }>
        { buttonSprite }
      </div>
    </div>
  );
};

export default SingleButton;
