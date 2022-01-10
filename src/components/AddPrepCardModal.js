import React from 'react';
import AddPrepCard from './AddPrepCard';
import './AddPrepCardModal.css';
import '../styles/utilities.css';

const AddPrepCardModal = ({ modalState, cardState }) => {
	return (
		<div className={`modal flex ${modalState.showModal ? '' : 'hide-modal'}`}>
			<AddPrepCard
				cardState={cardState}
				setShowModal={modalState.setShowModal}
			/>
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
