import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { filePathHelper } from '../../utilities/importFilePathHelper';

const MarkdownBlock = (props) => {
	const [loading, setLoading] = useState(true);
	const [markdown, loadMarkdown] = useState();

	useEffect(() => {
		if (loading) {
			fetch(filePathHelper(props.filePath + '.md'))
				.then(resp => {
					if (!resp.ok) {
						throw new Error(resp.statusText);
					}
					return resp.text();
				})
				.then(text => {
					loadMarkdown(text);
				}).catch(err => {
					loadMarkdown(err.toString());
				});
			setLoading(false);
		}
	}, [props.filePath]);

	return (loading ? <div>Loading...</div>
		: <ReactMarkdown source={markdown} />);
};

export default MarkdownBlock;