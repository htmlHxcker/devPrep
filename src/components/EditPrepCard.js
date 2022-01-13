import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/utilities.css';
import { editCard } from '../reducers/cardReducer';

const EditPrepCard = () => {
	const cards = useSelector((state) => state.cards);
	const current = useSelector((state) => state.current);

	const card = cards[current];
	const dispatch = useDispatch();

	const [cardFront, setCardFront] = useState(card.CARD_FRONT);
	const [cardBack, setCardBack] = useState(card.CARD_BACK);

	useEffect(() => {
		setCardFront(card.CARD_FRONT);
		setCardBack(card.CARD_BACK);
	}, [card]);

	async function editPrepCard() {
		if (!cardFront || !cardBack) {
			alert('You left a field empty!');
			return;
		}
		dispatch(
			editCard({
				CARD_FRONT: cardFront,
				CARD_BACK: cardBack,
				id: card.id,
			})
		);
		dispatch({ type: 'EDIT_CARD_MODAL', payload: false });
	}
	return (
		<div className="flex form--container">
			<h3 className="ff-cardo fs-700">Editing '{card.CARD_FRONT}'</h3>
			<label htmlFor="cardFront" className="fs-500 ff-cardo">
				Front of the Card
			</label>
			<input
				type="text"
				value={cardFront}
				onChange={(event) => {
					setCardFront(event.target.value);
				}}
				name="cardFront"
				className="text-input"
			/>
			<label htmlFor="cardBack" className="fs-500 ff-cardo">
				Back of the Card
			</label>
			<input
				type="text"
				value={cardBack}
				name="cardBack"
				onChange={(event) => {
					setCardBack(event.target.value);
				}}
				className="text-input"
			/>
			<button onClick={editPrepCard} className="primary-btn">
				Edit PrepCard
			</button>
		</div>
	);
};

export default EditPrepCard;
