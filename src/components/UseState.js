import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import CodeBlock from './code/codeBlock';
import MarkdownBlock from './markdown/markdownBlock';

import { routes } from '../constants/routes';
import {
	UseState,
	UseStateII,
	UseStateIII,
	UseStateIV
} from './withHooks/useState/index';

import {
	WithState,
	WithStateII,
	WithStateIII,
	WithStateIV
} from './withoutHooks/withState/index';

class UseStatePage extends Component {
	render() {
		return (
			<div className='App-content'>
				<button className='button'>
					<Link to={routes.HOME}>Back</Link>
				</button>
				<h3 className='content'>With Hooks</h3>
				<div className='contentBox'>
					<UseState />
					<div className='content'>
						<MarkdownBlock filePath={'withHooks/useState/useState.1.md'} />
					</div>
				</div>
				<div className='contentBox'>

					<CodeBlock filePath={'withHooks/useState/useState.1.js'} />
				</div>
				<div >
					<h3 className='content'>Without Hooks</h3>
					<WithState /><CodeBlock filePath={'withoutHooks/withState/withState.1.js'} />
				</div>
				<div >


				</div >
				<div className='contentBox'>
					<UseStateII count={100} />
					<WithStateII count={100} />
				</div>
				<div >
					<CodeBlock filePath={'withHooks/useState/useState.2.js'} />
					<CodeBlock filePath={'withoutHooks/withState/withState.2.js'} />
				</div >
				<div className='contentBox'>
					<UseStateIII />
					<WithStateIII />
				</div>
				<div >
					<CodeBlock filePath={'withHooks/useState/useState.3.js'} />
					<CodeBlock filePath={'withoutHooks/withState/withState.3.js'} />
				</div >
				<div className='contentBox'>
					<UseStateIV />
					<WithStateIV />
				</div>
				<div >
					<CodeBlock filePath={'withHooks/useState/useState.4.js'} />
					<CodeBlock filePath={'withoutHooks/withState/withState.4.js'} />
				</div >
			</div >
		);
	}
}

export default UseStatePage;