import React, { Component } from 'react';

class WithStateIII extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
	}

	updateCount = () => {
		let powerCount = (this.state.count + 1) * 2;
		this.setState({
			count: this.state.count + powerCount
		});
	}

	render = () => {
		return (
			<div className='content'>
				<h4>WithState with function</h4>
				<p>You clicked {this.state.count} times</p>
				<button
					className='button'
					onClick={() => this.updateCount()}>
					Click me
       			 </button>
			</div>
		);
	}
}

export default WithStateIII;