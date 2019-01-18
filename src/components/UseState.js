import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import CodeBlock from './code/codeBlock';

import { routes } from '../constants/routes';
import { UseState, UseStateII, UseStateIII, UseStateIV } from './withHooks/useState/index';
import { WithState, WithStateII, WithStateIII, WithStateIV } from './withoutHooks/withState/index';


class UseStatePage extends Component {
	render() {
		return (
			<div className='App-header'>
				<button className='button'>
					<Link to={routes.HOME}>Back</Link>
				</button>
				<div className='contentBox'>
					<h3 className='content'>With Hooks</h3>
					<h3 className='content'>Without Hooks</h3>
				</div>
				<div className='contentBox'>
					<UseState />
					<WithState />
				</div>
				<div >
					<CodeBlock filePath={'withHooks/useState.js'} />
					<CodeBlock filePath={'withoutHooks/withState.js'} />
				</div >
				<div className='contentBox'>
					<UseStateII count={100} />
					<WithStateII count={100} />
				</div>
				<div >
					<CodeBlock filePath={'withHooks/useState.2.js'} />
					<CodeBlock filePath={'withoutHooks/withState.2.js'} />
				</div >
				<div className='contentBox'>
					<UseStateIII />
					<WithStateIII />
				</div>
				<div >
					<CodeBlock filePath={'withHooks/useState.3.js'} />
					<CodeBlock filePath={'withoutHooks/withState.3.js'} />
				</div >
				<div className='contentBox'>
					<UseStateIV />
					<WithStateIV />
				</div>
				<div >
					<CodeBlock filePath={'withHooks/useState.4.js'} />
					<CodeBlock filePath={'withoutHooks/withState.4.js'} />
				</div >
			</div >
		);
	}
}

export default UseStatePage;