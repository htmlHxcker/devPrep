import React from 'react';
import { render } from 'react-dom';

const Foreground = () => {
	return <h1>Foreground</h1>;
};

export default Foreground;
render(<Foreground />, document.getElementById('foreground'));
