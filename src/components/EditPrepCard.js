import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useField from '../utils/useField';
import '../styles/utilities.css';
import { editCard } from '../reducers/cardReducer';

const EditPrepCard = ({ setShowModal }) => {
	const cards = useSelector((state) => state.cards);
	const current = useSelector((state) => state.current);
	const card = cards[current];
	const dispatch = useDispatch();

	const cardFront = useField('text', card.CARD_FRONT);
	const cardBack = useField('text', card.CARD_BACK);

	async function editPrepCard() {
		if (!cardFront.value || !cardBack.value) {
			alert('You left a field empty!');
			return;
		}
		dispatch(
			editCard({
				CARD_FRONT: cardFront.value,
				CARD_BACK: cardBack.value,
				id: card.id,
			})
		);

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
