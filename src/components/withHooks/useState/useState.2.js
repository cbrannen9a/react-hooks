import React, { useState } from 'react';

const UseStateII = (props) => {
	const [count, setCount] = useState(props.count);

	return (
		<div className='content'>
			<h4>UseState with props</h4>
			<p>You clicked {count} times</p>
			<button
				className='button'
				onClick={() => setCount(count + 1)}>
				Click me
      		</button>
		</div>
	);
};

export default UseStateII;
