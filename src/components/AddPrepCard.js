import React from 'react';
import useField from '../utils/useField';
import '../styles/utilities.css';
import { getStorage, setStorage } from '../utils/storage';

const AddPrepCard = ({ cardState, setShowModal }) => {
	const cardFront = useField('text');
	const cardBack = useField('text');

	async function addPrepCard() {
		if (!cardFront.value || !cardBack.value) {
			alert('You have to fill the form to create a card!');
			return;
		}

		let cardsObject = await getStorage('cards');

		let updatedCards = [];
		if (cardState) {
			updatedCards = [
				...cardState.cards,
				{
					CARD_FRONT: cardFront.value,
					CARD_BACK: cardBack.value,
				},
			];
			cardState.setCards(updatedCards);
		} else {
			updatedCards = [
				...cardsObject.cards,
				{
					CARD_FRONT: cardFront.value,
					CARD_BACK: cardBack.value,
				},
			];
		}
		setStorage({ cards: updatedCards });
		setShowModal ? setShowModal(false) : '';
	}
	return (
		<div className="flex form--container">
			<label htmlFor="cardFront" className="fs-500 ff-cardo">
				Front of the Card
			</label>
			<input
				{...cardFront}
				placeholder="What does HTML mean?"
				name="cardFront"
				className="text-input"
			/>
			<label htmlFor="cardBack" className="fs-500 ff-cardo">
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
		</div>
	);
};

export default AddPrepCard;
