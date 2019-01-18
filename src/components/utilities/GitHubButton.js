import React from 'react';

import {GITHUB_LOGO, GITHUB_REPO} from '../../constants/appConstants';

const GitHubButton = () =>{
	return (
	<button className='rounded-button'	
		onClick={() => window.location = GITHUB_REPO}>
		<img height={40} src={GITHUB_LOGO} alt='GitHub' />
	</button>
	);

};

export default GitHubButton;