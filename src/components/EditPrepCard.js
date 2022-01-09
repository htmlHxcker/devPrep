import React from 'react';
import useField from '../utils/useField';
import '../styles/utilities.css';
import { getStorage, setStorage } from '../utils/storage';

const EditPrepCard = ({ setShowModal, card }) => {
	const cardFront = useField('text', card.CARD_FRONT);
	const cardBack = useField('text', card.CARD_BACK);

	async function editPrepCard() {
		if (!cardFront.value || !cardBack.value) {
			alert('You left a field empty!');
			return;
		}

		// let cardsObject = await getStorage('cards');

		// let updatedCards = [];
		// if (cardState) {
		// 	updatedCards = [
		// 		...cardState.cards,
		// 		{
		// 			CARD_FRONT: cardFront.value,
		// 			CARD_BACK: cardBack.value,
		// 		},
		// 	];
		// 	cardState.setCards(updatedCards);
		// } else {
		// 	updatedCards = [
		// 		...cardsObject.cards,
		// 		{
		// 			CARD_FRONT: cardFront.value,
		// 			CARD_BACK: cardBack.value,
		// 		},
		// 	];
		// }
		// setStorage({ cards: updatedCards });
		setShowModal ? setShowModal(false) : '';
	}
	return (
		<div className="flex form--container">
			<h3 className="ff-cardo fs-700">Editing '{card.CARD_FRONT}'</h3>
			<label htmlFor="cardFront" className="fs-500 ff-cardo">
				Front of the Card
			</label>
			<input {...cardFront} name="cardFront" className="text-input" />
			<label htmlFor="cardBack" className="fs-500 ff-cardo">
				Back of the Card
			</label>
			<input {...cardBack} name="cardBack" className="text-input" />
			<button onClick={editPrepCard} className="primary-btn">
				Edit PrepCard
			</button>
		</div>
	);
};

export default EditPrepCard;
