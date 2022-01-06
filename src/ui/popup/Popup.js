import React from 'react';
import { render } from 'react-dom';
import 'regenerator-runtime/runtime.js';
import AddPrepCard from '../../components/AddPrepCard';
import '../../styles/index.css';
import '../../styles/utilities.css';
import './popup.css';

const Popup = () => {
	return (
		<div className="container--popup">
			<AddPrepCard />
		</div>
	);
};

export default Popup;
render(<Popup />, document.getElementById('popup'));
