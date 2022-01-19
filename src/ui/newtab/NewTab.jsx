import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import 'regenerator-runtime/runtime';
import { FiSliders, FiPlus } from 'react-icons/fi';

import store from '../../store';
import { initializeCards } from '../../reducers/cardReducer';
import { getSettings } from '../../reducers/settingsReducer';

import Carousel from '../../components/Carousel';
import AddPrepCard from '../../components/AddPrepCard';
import Modal from '../../components/Modal';

import currentTime from '../../../public/scripts/currentTime';

import '../../styles/index.css';
import '../../styles/utilities.css';
import './newtab.css';
import Preloader from '../../components/Preloader';

function NewTab() {
  const [time, setTime] = useState(currentTime());
  const cards = useSelector((state) => state.cards);
  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeCards());
    dispatch(getSettings());
  }, [dispatch]);

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const DATE = new Date().toLocaleDateString(undefined, options);
  const openModal = () => {
    dispatch({ type: 'ADD_CARD_MODAL', payload: true });
  };

  setInterval(() => {
    setTime(currentTime());
  }, 1000);
  return (
    <div className="container container--newtab">
      <div className="flex justify-content-sb">
        <div>
          <h2 className="ff-cardo fs-900">
            Hello
            {' '}
            {settings.username ? settings.username : '!'}
          </h2>
        </div>
        <div className="text-right">
          <h2 className="fs-900">{time}</h2>
          <p>{DATE}</p>
        </div>
      </div>
      <div className="flex container--card">
        {cards.length < 1 ? (
          <Preloader>There are no PrepCards yet</Preloader>
        ) : (
          <Carousel />
        )}
      </div>

      <div className="text-right floating-buttons">
        <button className="primary-btn newtab-buttons" onClick={openModal} type="button">
          <span title="Add PrepCard">
            <FiPlus size={30} />
          </span>
        </button>
        <a
          href="/options.html"
          title="PrepCard Settings"
          className="primary-btn newtab-buttons"
        >
          <FiSliders size={30} />
        </a>
      </div>

      <Modal modalName="ADD">
        <AddPrepCard />
      </Modal>
    </div>
  );
}
export default NewTab;
render(
  <Provider store={store}>
    <NewTab />
  </Provider>,
  document.getElementById('newtab'),
);
