/* eslint-disable no-multi-str */
import React, { useState } from 'react';

export const UseState = () => {
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

export const UseStateII = (props) => {
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

export const UseStateIII = () => {
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

export const useStateStrings = {
	I: 'export const UseState = () => {\n\
	//Declare state value of count and setCount function to update\n\
	//set the initial value of count as 0\n\
	const [count, setCount] = useState(0);\n\
\n\
	//setCount function \n\
	return(\n\
		<div className = "content" >\n\
			<h4>UseState</h4>\n\
			<p>You clicked {count} times</p>\n\
			<button\n\
				className="button"\n\
				onClick={() => setCount(count + 1)}>\n\
				Click me\n\
      		</button>\n\
		</div >\n\
	);\n\
}; ',
	II: 'export const UseStateII = (props) => {\n\
	const [count, setCount] = useState(props.count);\n\
\n\
	return(\n\
		<div className = "content" >\n\
			<h4>UseState with props</h4>\n\
			<p>You clicked {count} times</p>\n\
			<button\n\
				className="button"\n\
				onClick={() => setCount(count + 1)}>\n\
				Click me\n\
      		</button>\n\
		</div >\n\
	);\n\
};',
	III: 'export const UseStateIII = () => {\n\
	const [count, setCount] = useState(0);\n\
\n\
	const updateCount = () => {\n\
		let powerCount = (count + 1) * 2;\n\
		setCount(count + powerCount);\n\
	};\n\
\n\
	return(\n\
		<div className = "content" >\n\
			<h4>UseState with function</h4>\n\
			<p>You clicked {count} times</p>\n\
			<button\n\
				className="button"\n\
				onClick={() => updateCount()}>\n\
				Click me\n\
      		</button>\n\
		</div >\n\
	);\n\
};',
	IV: 'export const UseStateIV = () => {\n\
	const [count, setCount] = useState(0);\n\
	const [factor, setFactor] = useState(1);\n\
\n\
	const factors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "🦄"];\n\
	const operators = ["+", "*", "-", "/"];\n\
\n\
	const updateCount = {\n\
		"+": () => { setCount(count + factor); },\n\
		"*": () => { setCount(count * factor); },\n\
		"-": () => { setCount(count - factor); },\n\
		"/": () => { setCount(count / factor); }\n\
	};\n\
\n\
	const updateFactor = (factor) => {\n\
		if (factor === "🦄") {\n\
			return setFactor(Math.round(Math.random() * 1000, 0));\n\
		}\n\
		return setFactor(factor);\n\
	};\n\
\n\
	return(\n\
		<div className = "content" >\n\
			<h4>UseState with multiple functions</h4>\n\
			<p>You clicked {count} times</p>\n\
			{\n\
			factors.map(f => <button\n\
				className="button"\n\
				key={f}\n\
				onClick={() => updateFactor(f)}>\n\
				{f}\n\
			</button>)\n\
}\n\
	< div >\n\
	{\n\
		operators.map(o => <button\n\
			className="button"\n\
			key={o}\n\
			onClick={() => updateCount[o]()} >\n\
			{o}{factor}\n\
		</button>)\n\
	}\n\
			</div >\n\
	<button\n\
		className="button"\n\
		onClick={() => setCount(0)}>\n\
		Reset\n\
			</button>\n\
		</div >\n\
	);\n\
};'
};