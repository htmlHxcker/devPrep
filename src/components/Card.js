import React from 'react';
import './Card.css';
import '../styles/utilities.css';

const Card = ({ card, isCardFlipped, flipCard }) => {
	return (
		<div
			onClick={flipCard}
			className="card bg-carousel-pink active-card flex text-center"
		>
			<div>
				{isCardFlipped ? (
					<div>
						<p>{card.CARD_BACK} </p>
					</div>
				) : (
					<h2>{card.CARD_FRONT}</h2>
				)}
			</div>
		</div>
	);
};

export default Card;
