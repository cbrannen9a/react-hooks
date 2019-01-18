import React, { useState } from 'react';

export const UseStateIV = () => {
	const [count, setCount] = useState(0);
	const [factor, setFactor] = useState(1);

	const factors = [1, 2, 3, 4, 5, 6, 7, 8, 9, '🦄'];
	const operators = ['+', '*', '-', '/'];

	const updateCount = {
		'+': () => { setCount(count + factor); },
		'*': () => { setCount(count * factor); },
		'-': () => { setCount(count - factor); },
		'/': () => { setCount(count / factor); }
	};

	const updateFactor = (factor) => {
		if (factor === '🦄') {
			return setFactor(Math.round(Math.random() * 1000, 0));
		}
		return setFactor(factor);
	};

	return (
		<div className='content'>
			<h4>UseState with multiple functions</h4>
			<p>You clicked {count} times</p>
			{
				factors.map(f => <button
					className='button'
					key={f}
					onClick={() => updateFactor(f)}>
					{f}
				</button>)}
			<div>
				{
					operators.map(o => <button
						className='button'
						key={o}
						onClick={() => updateCount[o]()} >
						{o}{factor}
					</button>)
				}
			</div>
			<button
				className='button'
				onClick={() => setCount(0)}>
				Reset
			</button>
		</div>
	);
};

export default UseStateIV;