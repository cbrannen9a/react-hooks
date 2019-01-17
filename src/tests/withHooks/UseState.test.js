import React from 'react';
import ReactDOM from 'react-dom';
import { UseState } from '../../components/withHooks/UseState';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<UseState />, div);
	ReactDOM.unmountComponentAtNode(div);
});
