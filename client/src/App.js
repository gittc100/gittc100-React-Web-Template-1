import React, { useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalContext from './context/GlobalContext';
import MainNav from './components/navigation_components/MainNav';
import PageController from './components/page_components/PageController';
require('dotenv').config();

const Main = styled.div`
	display: flex;
	justify-content: space-between;
	min-height: 100vh;
	min-width: 100vw;
`;

const App = props => {
	const context = useContext(GlobalContext);
	return (
		<ThemeProvider theme={context.themes[context.theme]}>
			<Main>
				<MainNav {...props} />
				<PageController {...props} />
			</Main>
		</ThemeProvider>
	);
};

export default App;
