import React from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../constants/routes';

const NotFound = () => {

	return (
		<div className='App-header'>
			<h1 className='NotFound-title'>Oops! Page not found</h1>
			<button className='button'>
				<Link to={routes.HOME} className='NotFound-link'>Go to home page</Link>
			</button>
		</div>
	);

};

export default NotFound;