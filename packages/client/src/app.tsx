import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Dashboard } from '@/pages';

const routes = [
	{
		path: '/',
		exact: true,
		main: () => <Dashboard />,
	},
];

const AppWithProviders: FC = () => {
	return (
		<>
			<Switch>
				<Switch>
					{routes.map((route, index) => {
						return <Route key={index} path={route.path} exact={route.exact} children={<route.main />} />;
					})}
				</Switch>
			</Switch>
		</>
	);
};

const App: FC = () => {
	return (
		<Router>
			<AppWithProviders />
		</Router>
	);
};

export default App;
