import React, { Component } from 'react';

class WithStateII extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: this.props.count
		};
	}

	render = () => {
		return (
			<div className='content'>
				<h4>WithState from props</h4>
				<p>You clicked {this.state.count} times</p>
				<button
					className='button'
					onClick={() => this.setState({ count: this.state.count + 1 })}>
					Click me
       			 </button>
			</div>
		);
	}
}

export default WithStateII;