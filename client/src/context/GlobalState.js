import React, { useReducer } from 'react';

import GlobalContext from './GlobalContext';
import { GlobalReducer, TOGGLE_STYLE } from './reducers';

const themes = {
	light: {
		title: 'Light',
		nav: '#282828',
    link_active: '#00B2FF',
    link_inactive: '#7E7E7E',
    link_hover: '#5ACEFF',
    link_sub: '#3F3E3E',
		page: '#CFCFCF',
	},
	dark: {
		title: 'Dark',
		title: 'Light',
		nav: '#282828',
    link_active: '#00B2FF',
    link_inactive: 'green',
    link_hover: '#00B2FF',
    link_sub: '#3F3E3E',
    page_base: 'red',
    page_sub_1: 'red',
	},
};

const GlobalState = props => {
	const [styleState, dispatch] = useReducer(GlobalReducer, {
		theme: 'light',
	});

	const toggleTheme = theme => {
		dispatch({ type: TOGGLE_STYLE, theme: theme });
	};

	return (
		<GlobalContext.Provider
			value={{
        themes: themes,
				theme: styleState.theme,
				toggleTheme: toggleTheme,
			}}
		>
			{props.children}
		</GlobalContext.Provider>
	);
};

export default GlobalState;

