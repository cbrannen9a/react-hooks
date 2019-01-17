import React from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../constants/routes';

const Home = () => {
	return (<div className='App-header'>

		<button className='button'>
			<Link to={routes.USESTATE}>UseState</Link>
		</button>
	</div>
	);
};

export default Home;