import React, { useState } from 'react';
import { render } from 'react-dom';
import './newtab.css';

const NewTab = () => {
	return (
		<div className="container container--newtab">
			<div className="flex justify-content-sb">
				<div>
					<h2 className="ff-cardo fs-900">Hello, User Name</h2>
				</div>
				<div className="text-right">
					<h2 className="fs-900">10:11AM</h2>
					<p>Monday, 1 January 2022</p>
				</div>
			</div>
		</div>
	);
};
export default NewTab;
render(<NewTab />, document.getElementById('newtab'));
