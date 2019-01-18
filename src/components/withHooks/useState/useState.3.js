import React, { useState } from 'react';

const UseStateIII = () => {
	const [count, setCount] = useState(0);

	const updateCount = () => {
		let powerCount = (count + 1) * 2;
		setCount(count + powerCount);
	};

	return (
		<div className='content'>
			<h4>UseState with function</h4>
			<p>You clicked {count} times</p>
			<button
				className='button'
				onClick={() => updateCount()}>
				Click me
      		</button>
		</div>
	);
};

export default UseStateIII;