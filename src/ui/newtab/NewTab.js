import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import 'regenerator-runtime/runtime.js';
import { FiSliders, FiPlus } from 'react-icons/fi';

import { getStorage } from '../../utils/storage';
import store from '../../store';
import { initializeCards } from '../../reducers/cardReducer';
import Carousel from '../../components/Carousel';
import AddPrepCard from '../../components/AddPrepCard';
import Modal from '../../components/Modal';
import currentTime from '../../../public/scripts/currentTime';

import '../../styles/index.css';
import '../../styles/utilities.css';
import './newtab.css';

const NewTab = () => {
	const [time, setTime] = useState(currentTime());
	const cards = useSelector((state) => state.cards);
	const [settings, setSettings] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(initializeCards());
		getStorage('settings', setSettings);
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
					<h2 className="ff-cardo fs-900">Hello{`, ${settings.username}`}</h2>
				</div>
				<div className="text-right">
					<h2 className="fs-900">{time}</h2>
					<p>{DATE}</p>
				</div>
			</div>
			<div className="flex container--card">
				{cards.length < 1 ? (
					<div className="flex preloader">
						<img src="./images/loading.gif" alt="Loading PrepCards"></img>
						<h3 className="fs-600">There are no PrepCards yet.</h3>
					</div>
				) : (
					<Carousel />
				)}
			</div>

			<div className="text-right floating-buttons">
				<button className="primary-btn newtab-buttons" onClick={openModal}>
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
};
export default NewTab;
render(
	<Provider store={store}>
		<NewTab />
	</Provider>,
	document.getElementById('newtab')
);
