import React, { useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import GlobalContext from './context/GlobalContext';
import SideNav from './components/navigation/SideNav';
import PageController from './components/pages/PageController';
require('dotenv').config();

const Main = styled.div`
	display: flex;
	justify-content: space-between;
	min-height: 100vh;
	min-width: 100vw;
	// height: 100vh;
	// width: 100vw;
`;

const App = props => {
	const context = useContext(GlobalContext);
	return (
		<ThemeProvider theme={context.themes[context.theme]}>
			<Main>
				<SideNav {...props} />
				<PageController {...props} />
			</Main>
		</ThemeProvider>
	);
};

export default App;
