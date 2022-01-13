import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import 'regenerator-runtime/runtime.js';
import { FiSliders, FiPlus } from 'react-icons/fi';

import { getStorage } from '../../utils/storage';
import store from '../../store';
import { initializeCards } from '../../reducers/cardReducer';
import Carousel from '../../components/Carousel';
import AddPrepCardModal from '../../components/AddPrepCardModal';
import currentTime from '../../../public/scripts/currentTime';

import '../../styles/index.css';
import '../../styles/utilities.css';
import './newtab.css';

const NewTab = () => {
	const [time, setTime] = useState(currentTime());
	const [showModal, setShowModal] = useState(false);
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

	setInterval(() => {
		setTime(currentTime());
	}, 1000);
	function openModal() {
		setShowModal(true);
	}
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
					<h3 className="text-center">Loading Cards...</h3>
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

			<AddPrepCardModal modalState={{ showModal, setShowModal }} />
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
