import React, { Component } from 'react';

class WithEffect extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			trigger: false
		};
	}

	componentDidMount = () => {
		this.interval = setInterval(
			() => {
				if (this.state.trigger) {
					this.setState({
						count: this.state.count + 1
					});
				}
			});
	}

	componentWillUnmount = () => {
		clearInterval(this.interval);
	}

	render = () => {
		return (
			<div className='content'>
				<div>Click Start</div>
				<div>{this.state.count}</div>
				<button
					className='button'
					onClick={() => this.setState({ trigger: !this.state.trigger })}>
					{this.state.trigger ? 'Stop' : 'Start'}
				</button>
			</div>
		);
	}
}

export default WithEffect;