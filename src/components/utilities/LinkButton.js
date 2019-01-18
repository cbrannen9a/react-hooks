import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({ to, title }) => {
	return (
		<Link to={to} >
			<button className='button'>
				{title}
			</button>
		</Link>
	);
};

export default LinkButton;