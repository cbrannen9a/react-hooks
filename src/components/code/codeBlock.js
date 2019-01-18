import React, { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow as codeStyle } from 'react-syntax-highlighter/dist/styles/prism';
import { filePathHelper } from '../../utilities/importFilePathHelper';

const CodeBlock = (props) => {
	const [loading, setLoading] = useState(true);
	const [code, loadCode] = useState();

	useEffect(() => {
		if (loading) {
			fetch(filePathHelper(props.filePath + '.js'))
				.then(resp => {
					if (!resp.ok) {
						throw new Error(resp.statusText);
					}
					return resp.text();
				})
				.then(text => {
					loadCode(text);
				}).catch(err => {
					loadCode(err.toString());
				});
			setLoading(false);
		}
	}, [props.filePath]);

	return (loading ? <div>Loading...</div> :
		<div className='code'>
			<SyntaxHighlighter
				language='javascript'
				style={codeStyle}
				customStyle={{ borderRadius: '10px', padding: '1.5em' }}
			>
				{code}
			</SyntaxHighlighter>
		</div>
	);
};

export default CodeBlock;