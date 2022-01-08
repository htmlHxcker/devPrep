import React from 'react';
import AddPrepCard from './AddPrepCard';
import '../styles/utilities.css';
import Modal from './Modal';

const AddPrepCardModal = ({ modalState, cardState }) => {
	return (
		<Modal modalState={modalState}>
			<AddPrepCard
				cardState={cardState}
				setShowModal={modalState.setShowModal}
			/>
		</Modal>
	);
};

export default AddPrepCardModal;
