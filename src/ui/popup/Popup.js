import React from 'react';
import { render } from 'react-dom';

const Popup = () => {
	return <h1>Popup</h1>;
};

export default Popup;
render(<Popup />, document.getElementById('popup'));
