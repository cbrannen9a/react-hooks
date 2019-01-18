import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { routes } from '../constants/routes';
import ComponentBlock from './ComponentBlock';
import {
	UseState,
	UseStateII,
	UseStateIII,
	UseStateIV
} from './withHooks/useState/index';
import {
	WithState,
	WithStateII,
	WithStateIII,
	WithStateIV
} from './withoutHooks/withState/index';

const getExample = (example) => {
	switch (example) {
		case 1:
			return (<div>
				<ComponentBlock
					component={<UseState />}
					fileName='withHooks/useState/useState.1'
					title='With Hooks' />
				<ComponentBlock
					component={<WithState />}
					fileName='withoutHooks/withState/withState.1'
					title='Without Hooks' />
			</div>
			);
		case 2:
			return (<div>
				<ComponentBlock
					component={<UseStateII />}
					fileName='withHooks/useState/useState.2'
					title='With Hooks example 2' />
				<ComponentBlock
					component={<WithStateII />}
					fileName='withoutHooks/withState/withState.2'
					title='Without Hooks' />
			</div>);

		case 3:
			return (<div>
				<ComponentBlock
					component={<UseStateIII />}
					fileName='withHooks/useState/useState.3'
					title='With Hooks' />
				<ComponentBlock
					component={<WithStateIII />}
					fileName='withoutHooks/withState/withState.3'
					title='Without Hooks' />
			</div>);

		case 4:
			return (
				<div>
					<ComponentBlock
						component={<UseStateIV />}
						fileName='withHooks/useState/useState.4'
						title='With Hooks' />
					<ComponentBlock
						component={<WithStateIV />}
						fileName='withoutHooks/withState/withState.4'
						title='Without Hooks' />
				</div>
			);

		default:
			return null;
	}
};

const UseStatePage = () => {
	const [example, setExample] = useState(1);
	const examples = [1, 2, 3, 4];

	return (
		<div className='App-content'>
			<button className='button'>
				<Link to={routes.HOME}>Back</Link>
			</button>
			{examples.map(e =>
				<button
					className='button'
					key={e}
					onClick={() => setExample(e)}>
					{e}</button>
			)}
			{getExample(example)}
		</div >
	);
};

export default UseStatePage;