import React from 'react';
import useField from '../utils/useField';
import './AddPrepCard.css';
import '../styles/utilities.css';

const AddPrepCard = ({ modalState, cardState }) => {
	const cardFront = useField('text');
	const cardBack = useField('text');

	function addPrepCard() {
		let updatedCards = [
			...cardState.cards,
			{
				CARD_FRONT: cardFront.value,
				CARD_BACK: cardBack.value,
			},
		];
		chrome.storage.sync.set({ cards: updatedCards }, () => {
			cardState.setCards(updatedCards);
		});
		modalState.setShowModal(false);
	}
	return (
		<div className={`modal flex ${modalState.showModal ? '' : 'hide-modal'}`}>
			<label htmlFor="cardFront" className="fs-600">
				Front of the Card
			</label>
			<input
				{...cardFront}
				placeholder="What does HTML mean?"
				name="cardFront"
				className="text-input"
			/>
			<label htmlFor="cardBack" className="fs-600">
				Back of the Card
			</label>
			<input
				{...cardBack}
				placeholder="Hyper Text Markup Language"
				name="cardBack"
				className="text-input"
			/>
			<button onClick={addPrepCard} className="primary-btn bg-pink-flare">
				Add PrepCard
			</button>
			<button
				onClick={() => {
					modalState.setShowModal(false);
				}}
				className="primary-btn bg-pink-flare"
			>
				Cancel
			</button>
		</div>
	);
};

export default AddPrepCard;
