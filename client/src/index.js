import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router, withRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
