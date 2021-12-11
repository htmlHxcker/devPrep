import React from 'react';
import { render } from 'react-dom';

const NewTab = () => {
	return (
		<div>
			<h1>NewTab</h1>
			<p>Hello World</p>
		</div>
	);
};
export default NewTab;
render(<NewTab />, document.getElementById('newtab'));
