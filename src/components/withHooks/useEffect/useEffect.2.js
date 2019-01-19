import React, { useState, useEffect } from 'react';

const UseEffectII = () => {
	const [trigger, setTrigger] = useState(false);
	const [count, setCount] = useState(0);

	useEffect(() => {
		setCount(count + 1);
	}, [trigger]);

	return (
		<div className='content'>
			<h4>UseEffect example 2</h4>
			{trigger
				? <div>Each render calls useEffect which calls setCount</div>
				: <div>Click Start</div>}
			<div>{count}</div>
			<button
				className='button'
				onClick={() => setTrigger(!trigger)}>
				{trigger ? 'Stop' : 'Start'}
			</button>
		</div>
	);
};

export default UseEffectII;