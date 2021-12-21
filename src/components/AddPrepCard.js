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
		<div
			className={`modal bg-primary--light flex ${
				modalState.showModal ? '' : 'hide-modal'
			}`}
		>
			<input {...cardFront} placeholder="Text on the front of the card" />
			<input
				{...cardBack}
				placeholder="Answer to text on the front of the card"
			/>
			<button onClick={addPrepCard}>Add PrepCard</button>
		</div>
	);
};

export default AddPrepCard;
