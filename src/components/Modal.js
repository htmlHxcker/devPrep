import React from 'react';
import './Modal.css';
import '../styles/utilities.css';

const Modal = ({ children, modalState }) => {
	return (
		<div className={`modal flex ${modalState.showModal ? '' : 'hide-modal'}`}>
			{children}
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

export default Modal;
