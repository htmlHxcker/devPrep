import React from 'react';
import useField from '../utils/useField';
import './AddPrepCard.css';
import '../styles/utilities.css';
import { setStorage } from '../utils/storage';

const AddPrepCard = ({ modalState, cardState }) => {
	const cardFront = useField('text');
	const cardBack = useField('text');

	function addPrepCard() {
		if (!cardFront.value || !cardBack.value) {
			alert('You have to fill the form to create a card!');
			return;
		}
		let updatedCards = [
			...cardState.cards,
			{
				CARD_FRONT: cardFront.value,
				CARD_BACK: cardBack.value,
			},
		];

		setStorage({ cards: updatedCards }, cardState.setCards(updatedCards));
		modalState.setShowModal(false);
	}
	return (
		<div className={`modal flex ${modalState.showModal ? '' : 'hide-modal'}`}>
			<label htmlFor="cardFront" className="fs-600 ff-cardo">
				Front of the Card
			</label>
			<input
				{...cardFront}
				placeholder="What does HTML mean?"
				name="cardFront"
				className="text-input"
			/>
			<label htmlFor="cardBack" className="fs-600 ff-cardo">
				Back of the Card
			</label>
			<input
				{...cardBack}
				placeholder="Hyper Text Markup Language"
				name="cardBack"
				className="text-input"
			/>
			<button onClick={addPrepCard} className="primary-btn">
				Add PrepCard
			</button>
			<button
				onClick={() => {
					modalState.setShowModal(false);
				}}
				className="primary-btn close-modal-btn"
			>
				Cancel
			</button>
		</div>
	);
};

export default AddPrepCard;
