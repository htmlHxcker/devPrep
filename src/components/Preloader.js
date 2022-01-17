import React from 'react';

import '../styles/utilities.css';
import './Preloader.css';

const Preloader = ({ children }) => {
	return (
		<div className="flex preloader">
			<img src="./images/loading.gif" alt="Loading PrepCards"></img>
			<h3 className="fs-600">{children}</h3>
		</div>
	);
};

export default Preloader;
