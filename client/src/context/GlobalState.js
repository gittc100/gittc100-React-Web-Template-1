import React, { useReducer } from 'react';

import GlobalContext from './GlobalContext';
import { GlobalReducer, TOGGLE_STYLE } from './reducers';

const themes = {
	dark: {
		title: 'Dark Mode',
		nav: '#202020',
		nav_box_sadow: '0px 0px 7px 2px black',
		link_active: '#00B2FF',
		link_hover: '#00B2FF',
		link_inactive: '#7E7E7E',
		link_sub: '#3F3E3E',
		link_sub_border: '#00B2FF',
		button_text: '#000000',
		button_disabled: '#7E7E7E',
		button_disabled_light: '#b1b1b1',
		button_active: '#00B2FF',
		button_hover: '#5ACEFF',
		button_active_warning: '#cc0000',
		button_hover_warning: 'red',
		button_box_sadow: '1px 1px 3px 1px black',
		page_base: '#181818',
		page_text: 'white',
		title_panel_box_sadow: '0px 4px 4px #000000',
		panel_base: '#181818',
		panel_text: 'white',
		panel_box_sadow: '2px 2px 5px 2px black'
	},
	light: {
		title: 'Light Mode',
		nav: '#202020',
		nav_box_sadow: '0px 0px 7px 2px black',
		link_active: '#00B2FF',
		link_hover: '#5ACEFF',
		link_inactive: '#7E7E7E',
		link_sub: '#3F3E3E',
		link_sub_border: '#3F3E3E',
		button_text: '#000000',
		button_disabled: '#7E7E7E',
		button_disabled_light: '#b1b1b1',
		button_active: '#00B2FF',
		button_hover: '#5ACEFF',
		button_active_warning: '#cc0000',
		button_hover_warning: 'red',
		button_box_sadow: '1px 1px 3px 1px black',
		page_base: '#f9f9f9',
		page_text: 'black',
		title_panel_box_sadow: '0px 4px 4px #000000',
		panel_base: '#f9f9f9',
		panel_text: 'black',
		panel_box_sadow: '2px 2px 5px 2px black'
	},
};

const GlobalState = props => {
	const [styleState, dispatch] = useReducer(GlobalReducer, {
		theme: window.localStorage.getItem("chif_manager_theme") || 'light',
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
