import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { WelcomePage } from '../components/WelcomePage';
import { ConnectedEditor } from '../components/Editor';

export default function Router() {
	return (
		<Switch>
			<Route exact path='/' component={WelcomePage} />
			<Route path='/editor' component={ConnectedEditor} />
		</Switch>
	);
}
