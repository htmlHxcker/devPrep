import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrementCurrent, incrementCurrent } from '../reducers/currentReducer';
import Card from './Card';
import './Carousel.css';

function Carousel() {
  const [flipped, setFlipped] = useState(false);
  const current = useSelector((state) => state.current);
  const cards = useSelector((state) => state.cards);
  const { length } = cards;
  const dispatch = useDispatch();

  const prevCard = () => {
    dispatch(decrementCurrent(current, length));
    setFlipped(false);
  };

  const nextCard = () => {
    dispatch(incrementCurrent(current, length));
    setFlipped(false);
  };

  const flipCard = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="carousel flex align-items-center justify-content-sb">
      <div className="card side-card" onClick={prevCard} />

      <Card isCardFlipped={flipped} flipCard={flipCard} />

      <div className="card side-card" onClick={nextCard} />
    </div>
  );
}

export default Carousel;
