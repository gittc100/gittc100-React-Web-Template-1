import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './HomePage';
import ButtonPage from './ButtonPage';
import SettingsPage from './SettingsPage';
require('dotenv').config();

const Controller = styled.div`
	height: 100%;
	width: 100%;
	border: 1px solid green;
`;
const PageController = props => {
	console.log("props----theme2",props.theme);
	return (
		<Controller>
			<Switch>
				<Route exact path="/" render={() => <HomePage {...props} />} />
				<Route exact path="/buttons" render={() => <ButtonPage {...props} />} />
				<Route exact path="/settings" render={() => <SettingsPage {...props} />} />
			</Switch>
		</Controller>
	);
};

export default PageController;
~