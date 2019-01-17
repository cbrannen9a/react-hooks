/* eslint-disable no-multi-str */
import React, { Component } from 'react';

export class WithState extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
	}

	render = () => {
		return (
			<div className='content'>
				<h4>WithState</h4>
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

export class WithStateII extends Component {
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

export class WithStateIII extends Component {
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


export class WithStateIV extends Component {
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


export const withStateStrings = {
	I: 'export class WithState extends Component {\n\
	constructor(props) {\n\
		super(props);\n\
		this.state = {\n\
			count: 0\n\
		};\n\
	}\n\
\n\
	render = () => {\n\
		return (\n\
			<div className="content">\n\
				<h4>WithState</h4>\n\
				<p>You clicked {this.state.count} times</p>\n\
				<button\n\
					className="button"\n\
					onClick={() => this.setState({ count: this.state.count + 1 })}>\n\
					Click me\n\
       			 </button>\n\
			</div>\n\
		);\n\
	}\n\
}',
	II: 'export class WithStateII extends Component {\n\
	constructor(props) {\n\
		super(props);\n\
		this.state = {\n\
			count: this.props.count\n\
		};\n\
	}\n\
\n\
	render = () => {\n\
		return (\n\
			<div className="content">\n\
				<h4>WithState from props</h4>\n\
				<p>You clicked {this.state.count} times</p>\n\
				<button\n\
					className="button"\n\
					onClick={() => this.setState({ count: this.state.count + 1 })}>\n\
					Click me\n\
       			 </button>\n\
			</div>\n\
		);\n\
	}\n\
}',
	III: 'export class WithStateIII extends Component {\n\
	constructor(props) {\n\
		super(props);\n\
		this.state = {\n\
			count: 0\n\
		};\n\
	}\n\
\n\
	updateCount = () => {\n\
		let powerCount = (this.state.count + 1) * 2;\n\
		this.setState({\n\
			count: this.state.count + powerCount\n\
		});\n\
	}\n\
\n\
	render = () => {\n\
		return (\n\
			<div className="content">\n\
				<h4>WithState with function</h4>\n\
				<p>You clicked {this.state.count} times</p>\n\
				<button\n\
					className="button"\n\
					onClick={() => this.updateCount()}>\n\
					Click me\n\
       			 </button>\n\
			</div>\n\
		);\n\
	}\n\
}',
	IV: 'export class WithStateIV extends Component {\n\
	constructor(props) {\n\
		super(props);\n\
		this.state = {\n\
			count: 0,\n\
			factor: 1\n\
		};\n\
	}\n\
\n\
	updateFactor = (factor) => {\n\
		if (factor === "🦄") {\n\
\n\
			return this.setState({ factor: Math.round(Math.random() * 1000, 0) });\n\
		}\n\
		return this.setState({ factor: factor });\n\
	}\n\
\n\
	updateCount = (operator) => {\n\
			const updateCount = {\n\
				"+": () => { this.setState({ count: (this.state.count + this.state.factor) }); },\n\
				"*": () => { this.setState({ count: (this.state.count * this.state.factor) }); },\n\
				"-": () => { this.setState({ count: (this.state.count - this.state.factor) }); },\n\
				"/": () => { this.setState({ count: (this.state.count / this.state.factor) }); }\n\
			};\n\
			return updateCount[operator]();\n\
		}\n\
\n\
	render = () => {\n\
		const factors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "🦄"];\n\
		const operators = ["+", "*", "-", "/"];\n\
\n\
		return (\n\
			<div className="content">\n\
				<h4>WithState from props</h4>\n\
				<p>You clicked {this.state.count} times</p>\n\
				{\n\
					factors.map(f => <button\n\
						className="button"\n\
						key={f}\n\
						onClick={() => this.updateFactor(f)}>\n\
						{f}\n\
					</button>)}\n\
				<div>\n\
					{\n\
						operators.map(o => <button\n\
							className="button"\n\
							key={o}\n\
							onClick={() => this.updateCount(o)} >\n\
							{o}{this.state.factor}\n\
						</button>)\n\
					}\n\
				</div>\n\
				<button\n\
					className="button"\n\
					onClick={() => this.setState({ count: 0 })}>\n\
					Reset\n\
			</button>\n\
			</div>\n\
		);\n\
	}\n\
}'
};