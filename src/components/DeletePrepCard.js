import React from 'react';
import '../styles/utilities.css';

const DeletePrepCard = () => {
	return (
		<div className="center-text">
			<h2 className="ff-600 fs-cardo">Warning</h2>
			<p className="fs-400">Are you sure you want to delete</p>
			<div>
				<buttton className="primary-btn">Yes, Delete it</buttton>
				<buttton className="primary-btn">No, keep it</buttton>
			</div>
		</div>
	);
};

export default DeletePrepCard;
