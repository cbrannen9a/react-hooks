import React, { useState } from 'react';

import LinkButton from './utilities/LinkButton';
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

import { routes } from '../constants/routes';

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
					component={<UseStateII count={100}/>}
					fileName='withHooks/useState/useState.2'
					title='With Hooks example 2' />
				<ComponentBlock
					component={<WithStateII count={100}/>}
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
	const examples = ['<', 1, 2, 3, 4, '>'];

	const handleClick = (e)=>{
		if(e === '<' ) {
			if(example === 1) {return;}
			return setExample(example - 1);
		} else if (e === '>'){
			if(example === (examples.length - 2)) {return;}
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

export default UseStatePage;