import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from '../pages/HomePage';
import MainComponentsPage from '../pages/MainComponentsPage';
import SettingsPage from '../pages/SettingsPage';
require('dotenv').config();

const Controller = styled.div`
	height: 100vh;
	width: 100%;
`;

const site_name = 'APP NAME';

const PageController = props => {
	return (
		<Controller>
			<Switch>
				<Route exact path="/" render={() => <HomePage {...props} site_name={site_name} />} />
				<Route
					exact
					path="/main-components"
					render={() => <MainComponentsPage {...props} site_name={site_name} />}
				/>
				<Route exact path="/settings" render={() => <SettingsPage {...props} site_name={site_name} />} />
			</Switch>
		</Controller>
	);
};

export default PageController;
