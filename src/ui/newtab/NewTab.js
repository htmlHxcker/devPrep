import React, { useState } from 'react';
import { render } from 'react-dom';

import currentTime from '../../../public/scripts/currentTime';
import '../../styles/index.css';
import '../../styles/utilities.css';
import './newtab.css';

const NewTab = () => {
	const [time, setTime] = useState(currentTime());

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
	return (
		<div className="container container--newtab">
			<div className="flex justify-content-sb">
				<div>
					<h2 className="ff-cardo fs-900">Hello, User Name</h2>
				</div>
				<div className="text-right">
					<h2 className="fs-900">{time}</h2>
					<p>{DATE}</p>
				</div>
			</div>
		</div>
	);
};
export default NewTab;
render(<NewTab />, document.getElementById('newtab'));
