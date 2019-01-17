import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow as codeStyle } from 'react-syntax-highlighter/dist/styles/prism';

import { routes } from '../constants/routes';
import { UseState, UseStateII, UseStateIII, UseStateIV, useStateStrings } from './withHooks/useState';
import { WithState, WithStateII, WithStateIII, WithStateIV, withStateStrings } from './withoutHooks/withState';

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
					<SyntaxHighlighter
						language="javascript"
						style={codeStyle}
						customStyle={{ borderRadius: '10px', padding: '1.5em' }}
					>
						{useStateStrings.I}
					</SyntaxHighlighter>
					<SyntaxHighlighter
						language="javascript"
						style={codeStyle}
						customStyle={{ borderRadius: '10px', padding: '1.5em' }}
					>
						{withStateStrings.I}
					</SyntaxHighlighter>
				</div >
				<div className='contentBox'>
					<UseStateII count={100} />
					<WithStateII count={100} />
				</div>
				<div >
					<SyntaxHighlighter
						language="javascript"
						style={codeStyle}
						customStyle={{ borderRadius: '10px', padding: '1.5em' }}
					>
						{useStateStrings.II}
					</SyntaxHighlighter>
					<SyntaxHighlighter
						language="javascript"
						style={codeStyle}
						customStyle={{ borderRadius: '10px', padding: '1.5em' }}
					>
						{withStateStrings.II}
					</SyntaxHighlighter>
				</div >
				<div className='contentBox'>

					<UseStateIII />
					<WithStateIII />
				</div>
				<div >
					<SyntaxHighlighter
						language="javascript"
						style={codeStyle}
						customStyle={{ borderRadius: '10px', padding: '1.5em' }}
					>
						{useStateStrings.III}
					</SyntaxHighlighter>
					<SyntaxHighlighter
						language="javascript"
						style={codeStyle}
						customStyle={{ borderRadius: '10px', padding: '1.5em' }}
					>
						{withStateStrings.III}
					</SyntaxHighlighter>
				</div >
				<div className='contentBox'>
					<UseStateIV />
					<WithStateIV />
				</div>
				<div >
					<SyntaxHighlighter
						language="javascript"
						style={codeStyle}
						customStyle={{ borderRadius: '10px', padding: '1.5em' }}
					>
						{useStateStrings.IV}
					</SyntaxHighlighter>
					<SyntaxHighlighter
						language="javascript"
						style={codeStyle}
						customStyle={{ borderRadius: '10px', padding: '1.5em' }}
					>
						{withStateStrings.IV}
					</SyntaxHighlighter>
				</div >
			</div >
		);
	}
}

export default UseStatePage;