import React from 'react';
import './Card.css';
import '../styles/utilities.css';

const Card = ({ card, isCardFlipped, flipCard }) => {
	return (
		<div
			onClick={flipCard}
			className="card bg-secondary--light active-card flex text-center"
		>
			<div>
				{isCardFlipped ? <p>{card.CARD_BACK} </p> : <h2>{card.CARD_FRONT}</h2>}
			</div>
		</div>
	);
};

export default Card;
