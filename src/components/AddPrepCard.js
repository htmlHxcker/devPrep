import React from 'react';
import useField from '../utils/useField';
import '../styles/utilities.css';
import { useDispatch } from 'react-redux';
import { addCard } from '../reducers/cardReducer';
import { v4 as uuidv4 } from 'uuid';

const AddPrepCard = () => {
	const dispatch = useDispatch();
	const cardFront = useField('text');
	const cardBack = useField('text');

	async function addPrepCard() {
		if (!cardFront.value || !cardBack.value) {
			alert('You have to fill the form to create a card!');
			return;
		}
		const card = {
			CARD_FRONT: cardFront.value,
			CARD_BACK: cardBack.value,
			id: uuidv4(),
		};
		dispatch(addCard(card));

		dispatch({ type: ADD_CARD_MODAL, payload: false });
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
