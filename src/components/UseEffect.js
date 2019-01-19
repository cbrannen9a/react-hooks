import React, { useState } from 'react';

import LinkButton from './utilities/LinkButton';

import { routes } from '../constants/routes';
import ComponentBlock from './ComponentBlock';
import { UseEffect, UseEffectII } from './withHooks/useEffect/index';

const getExample = (example) => {
	switch (example) {
		case 1:
			return <ComponentBlock component={<UseEffect />}
				fileName='withHooks/useEffect/useEffect.1'
				title='UseEffect Hook example' />;
		case 2:
			return <ComponentBlock component={<UseEffectII />}
				fileName='withHooks/useEffect/useEffect.2'
				title='UseEffect Hook example 2' />;
		default:
			return null;
	}
};

const UseEffectPage = () => {
	const [example, setExample] = useState(1);
	const examples = ['<', 1, 2, '>'];

	const handleClick = (e) => {
		if (e === '<') {
			if (example === 1) { return; }
			return setExample(example - 1);
		} else if (e === '>') {
			if (example === (examples.length - 2)) { return; }
			return setExample(example + 1);
		}
		return setExample(e);
	};

	return (
		<div className='App-content'>
			<LinkButton to={routes.HOME} title='Home' />
			{examples.map(e =>
				<button
					className='button'
					key={e}
					onClick={() => handleClick(e)}>
					{e}</button>
			)}
			{getExample(example)}
		</div >
	);
};

export default UseEffectPage;