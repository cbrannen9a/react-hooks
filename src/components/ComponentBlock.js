import React from 'react';

import CodeBlock from './code/codeBlock';
import MarkdownBlock from './markdown/markdownBlock';

const ComponentBlock = ({ component, fileName, title }) => {
	return (
		<div>
			<h3 className='content'>{title}</h3>
			<div className='contentBox'>
				{component}
				<div className='content'>
					<MarkdownBlock key={fileName} filePath={fileName} />
				</div>
			</div>
			<CodeBlock key={fileName} filePath={fileName} />			
		</div>
	);
};

export default ComponentBlock;