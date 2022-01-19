import React from 'react';
import './Modal.css';
import '../styles/utilities.css';
import { useDispatch, useSelector } from 'react-redux';

function Modal({ children, modalName }) {
  const modal = useSelector((state) => state.modal);
  const modalState = modal[modalName];
  const dispatch = useDispatch();

  return (
    <div className={`modal flex ${!modalState ? 'hide-modal' : ''}`}>
      {children}
      <button
        onClick={() => {
				  dispatch({
				    type: `${modalName}_CARD_MODAL`,
				    payload: false,
				  });
        }}
        className="primary-btn close-modal-btn"
      >
        Cancel
      </button>
    </div>
  );
}

export default Modal;
