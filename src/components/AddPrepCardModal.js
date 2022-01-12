import React from 'react';
import AddPrepCard from './AddPrepCard';
import '../styles/utilities.css';
import Modal from './Modal';

const AddPrepCardModal = ({ modalState }) => {
	return (
		<Modal modalState={modalState}>
			<AddPrepCard setShowModal={modalState.setShowModal} />
		</Modal>
	);
};

export default AddPrepCardModal;
