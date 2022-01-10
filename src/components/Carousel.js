import React, { useState } from 'react';
import Card from './Card';
import './Carousel.css';

const Carousel = ({ cardState }) => {
	const [flipped, setFlipped] = useState(false);
	const [currentCard, setCurrentCard] = useState(0);
	const cards = cardState.cards;
	const length = cards.length;

	const nextCard = () => {
		setCurrentCard(currentCard === length - 1 ? 0 : currentCard + 1);
		setFlipped(false);
	};

	const prevCard = () => {
		setCurrentCard(currentCard === 0 ? length - 1 : currentCard - 1);
		setFlipped(false);
	};

	const flipCard = () => {
		setFlipped(!flipped);
	};

	return (
		<div className="carousel flex align-items-center justify-content-sb">
			<div className="card side-card" onClick={prevCard}></div>

			<Card
				cardState={cardState}
				currentState={{ currentCard, setCurrentCard }}
				isCardFlipped={flipped}
				flipCard={flipCard}
			/>

			<div className="card side-card" onClick={nextCard}></div>
		</div>
	);
};

export default Carousel;
