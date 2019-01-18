import React, { useState } from 'react';

const UseState = () => {
	//Declare state value of count and setCount function to update
	//set the initial value of count as 0
	const [count, setCount] = useState(0);

	//setCount function 
	return (
		<div className='content'>
			<h4>UseState</h4>
			<p>You clicked {count} times</p>
			<button
				className='button'
				onClick={() => setCount(count + 1)}>
				Click me
      		</button>
		</div>
	);
};

export default UseState;