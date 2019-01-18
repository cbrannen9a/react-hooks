import React from 'react';
import '../styles/App.css';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './Home';
import UseState from './UseState';
import NotFound from './NotFound';

import { routes } from '../constants/routes';


const App = () => {
	return (
		<BrowserRouter>
			<div className='App'>
				<Switch>
					<Route exact path={routes.HOME} component={Home} />
					<Route exact path={routes.USESTATE} component={UseState} />
					<Redirect from={routes.BASE} to={routes.HOME} />
					<Route component={NotFound} />
				</Switch>
			</div>
		</BrowserRouter>
	);

};

export default App;
