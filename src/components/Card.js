import React, { useState } from 'react';
import './Card.css';
import '../styles/utilities.css';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import Modal from './Modal';
import EditPrepCard from './EditPrepCard';
import { useSelector, useDispatch } from 'react-redux';

const Card = ({ isCardFlipped, flipCard }) => {
	const current = useSelector((state) => state.current);
	const cards = useSelector((state) => state.cards);
	const card = cards[current];

	const dispatch = useDispatch();
	return (
		<>
			<div
				onClick={flipCard}
				className="card bg-carousel-pink active-card flex text-center"
			>
				{isCardFlipped ? (
					<div>
						<div className="text-right flex modify-icons">
							<span
								onClick={() => {
									dispatch({ type: 'EDIT_CARD_MODAL', payload: true });
								}}
							>
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
			<Modal modalName="EDIT">
				<EditPrepCard />
			</Modal>
		</>
	);
};

export default Card;
