import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import 'regenerator-runtime/runtime.js';
import { FiSliders, FiPlus } from 'react-icons/fi';
import Carousel from '../../components/Carousel';
import AddPrepCard from '../../components/AddPrepCard';
import currentTime from '../../../public/scripts/currentTime';
import '../../styles/index.css';
import '../../styles/utilities.css';
import './newtab.css';

const NewTab = () => {
	const [time, setTime] = useState(currentTime());
	const [showModal, setShowModal] = useState(false);
	const [cards, setCards] = useState([]);
	useEffect(() => {
		async function getCards() {
			await chrome.storage.sync.get('cards', (result) => {
				setCards(result.cards);
			});
		}
		getCards();
	}, []);

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
					<h2 className="ff-cardo fs-900">Hello, Username</h2>
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
					<Carousel cards={cards} />
				)}
			</div>

			<div className="text-right floating-buttons">
				<button className="primary-btn newtab-buttons" onClick={openModal}>
					<span>
						<FiPlus size={30} />
					</span>
				</button>
				<a href="/options.html" className="primary-btn newtab-buttons">
					<FiSliders size={30} />
				</a>
			</div>

			<AddPrepCard
				modalState={{ showModal, setShowModal }}
				cardState={{ cards, setCards }}
			/>
		</div>
	);
};
export default NewTab;
render(<NewTab />, document.getElementById('newtab'));
