import React, { useReducer } from 'react';

import GlobalContext from './GlobalContext';
import { GlobalReducer, TOGGLE_STYLE } from './reducers';

const themes = {
	dark: {
		title: 'Dark Mode',
		nav: '#282828',
		link_active: '#00B2FF',
		link_inactive: '#7E7E7E',
		link_hover: '#00B2FF',
		link_sub: '#3F3E3E',
		link_sub_border: '#00B2FF',
		page_base: '#3F3E3E',
		panel_base: '#282828',
		page_text: 'white',
		panel_text: 'white',
	},
	mid: {
		title: 'Mid Mode',
		nav: '#282828',
		link_active: '#00B2FF',
		link_inactive: '#7E7E7E',
		link_hover: '#5ACEFF',
		link_sub: '#3F3E3E',
		link_sub_border: '#3F3E3E',
		page_base: '#CFCFCF',
		panel_base: '#7E7E7E',
		page_text: 'black',
		panel_text: 'black',
	},
	light: {
		title: 'Light Mode',
		nav: '#282828',
		link_active: '#00B2FF',
		link_inactive: '#7E7E7E',
		link_hover: '#5ACEFF',
		link_sub: '#3F3E3E',
		link_sub_border: '#3F3E3E',
		page_base: '#CFCFCF',
		panel_base: '#7E7E7E',
		page_text: 'black',
		panel_text: 'black',
	},
};

const GlobalState = props => {
	const [styleState, dispatch] = useReducer(GlobalReducer, {
		theme: 'dark',
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
