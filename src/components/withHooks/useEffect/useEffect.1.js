import React, { useState, useEffect } from 'react';

const UseEffect = () => {
	const [trigger, setTrigger] = useState(false);
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (trigger) {
			setCount(count + 1);
		}
	});

	return (
		<div className='content'>
			<h4>UseEffect</h4>
			{trigger
				? <div>Each render calls useEffect which calls setCount which causes another render</div>
				: <div>Click Start</div>}
			<div>{count}</div>
			<button
				className='button'
				onClick={() => setTrigger(!trigger)}>
				{trigger ? 'Stop' : 'Start'}
			</button>
		</div >
	);
};

export default UseEffect;