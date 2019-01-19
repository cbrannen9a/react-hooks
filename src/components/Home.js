import React from 'react';

import LinkButton from './utilities/LinkButton';

import { routes } from '../constants/routes';

const Home = () => {
	return (
		<div className='App-header'>
			<LinkButton to={routes.USESTATE} title='UseState' />
			<LinkButton to={routes.USEEFFECT} title='UseEffect' />
		</div>
	);
};

export default Home;