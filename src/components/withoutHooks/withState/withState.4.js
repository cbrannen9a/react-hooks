import React, { Component } from 'react';

class WithStateIV extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			factor: 1
		};
	}

	updateFactor = (factor) => {
		if (factor === '🦄') {

			return this.setState({ factor: Math.round(Math.random() * 1000, 0) });
		}
		return this.setState({ factor: factor });
	}

	updateCount = (operator) => {
		const updateCount = {
			'+': () => { this.setState({ count: (this.state.count + this.state.factor) }); },
			'*': () => { this.setState({ count: (this.state.count * this.state.factor) }); },
			'-': () => { this.setState({ count: (this.state.count - this.state.factor) }); },
			'/': () => { this.setState({ count: (this.state.count / this.state.factor) }); }
		};
		return updateCount[operator]();
	}

	render = () => {
		const factors = [1, 2, 3, 4, 5, 6, 7, 8, 9, '🦄'];
		const operators = ['+', '*', '-', '/'];

		return (
			<div className='content'>
				<h4>WithState from props</h4>
				<p>You clicked {this.state.count} times</p>
				{
					factors.map(f => <button
						className='button'
						key={f}
						onClick={() => this.updateFactor(f)}>
						{f}
					</button>)}
				<div>
					{
						operators.map(o => <button
							className='button'
							key={o}
							onClick={() => this.updateCount(o)} >
							{o}{this.state.factor}
						</button>)
					}
				</div>
				<button
					className='button'
					onClick={() => this.setState({ count: 0 })}>
					Reset
			</button>
			</div>
		);
	}
}

export default WithStateIV;