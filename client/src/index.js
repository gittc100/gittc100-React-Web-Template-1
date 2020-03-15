import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router, withRouter } from 'react-router-dom';
import history from './utils/history';
import GlobalState from './context/GlobalState';

const AppWithRouter = withRouter(App);
const rootElement = document.getElementById('root');

ReactDOM.render(
	<GlobalState>
		<Router history={history}>
			<AppWithRouter />
		</Router>
	</GlobalState>,
	rootElement,
);

