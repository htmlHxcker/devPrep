import { useState } from 'react';

const Card = ({ title, description }) => {
	const [flipped, setFlipped] = useState(false);

	const flipCard = () => {
		setFlipped(!flipped);
	};

	return (
		<div onClick={flipCard}>
			<h2>{title}</h2>
			{flipped ? <p>{description}</p> : ''}
		</div>
	);
};

export default Card;
