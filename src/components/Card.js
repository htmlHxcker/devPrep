import React from 'react';
import './Card.css';
import '../styles/utilities.css';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

const Card = ({ card, isCardFlipped, flipCard }) => {
	return (
		<div
			onClick={flipCard}
			className="card bg-carousel-pink active-card flex text-center"
		>
			{isCardFlipped ? (
				<div>
					<div className="text-right flex modify-icons">
						<span>
							<FiEdit2 size={25} />
						</span>
						<span>
							<FiTrash2 size={25} color="red" />
						</span>
					</div>

					<p>{card.CARD_BACK} </p>
				</div>
			) : (
				<h2>{card.CARD_FRONT}</h2>
			)}
		</div>
	);
};

export default Card;
