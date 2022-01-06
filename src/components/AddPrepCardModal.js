import React from 'react';
import useField from '../utils/useField';
import AddPrepCard from './AddPrepCard';
import './AddPrepCardModal.css';
import '../styles/utilities.css';
import { setStorage } from '../utils/storage';

const AddPrepCardModal = ({ modalState, cardState }) => {
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
			<AddPrepCard />
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

export default AddPrepCardModal;
