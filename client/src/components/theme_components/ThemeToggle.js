import React, { useState, useEffect, useContext } from 'react';
import Switch2Way from '../general_components/Switch2Way';
import PTag from '../general_components/PTag';
import Panel from '../panel_components/Panel';
import GlobalContext from '../../context/GlobalContext';
require('dotenv').config();

const ThemeToggle = props => {
	const context = useContext(GlobalContext);
	const [switchPosition, setSwitchPosition] = useState(0);
	let positionOptions = {
		0: { key: 'light' },
		1: { key: 'dark' },
	};
	const changeTheme = index => {
		setSwitchPosition(index);
		context.toggleTheme(positionOptions[index].key);
		window.localStorage.setItem("chif_manager_theme", positionOptions[index].key);
	};
	useEffect(() => {
		if (context.theme !== positionOptions[switchPosition].key) {
			if (switchPosition === 0) {
				setSwitchPosition(1);
			} else if (switchPosition === 1) {
				setSwitchPosition(0);
			}
		}
	}, [context, context.theme]);
	return (
		<Panel
			{...props}
			panel_config={{
				display: 'flex',
				justify_content: 'center',
				align_items: 'center',
				flex_direction: 'row',
				width: 'auto'
			}}
		>
			<PTag
				{...props}
				ptag_config={{
					title: 'Dark Mode:',
					color: props => props.theme.panel_text,
					margin: '0px 10px 0px 0px',
					font_weight: '600',
					font_size: '18px',
				}}
			/>
			<Switch2Way
				switch_config={{
					position: switchPosition,
					callback: changeTheme,
					width: 'auto',
					height: 'auto',
					slide_width: '40px',
					slide_height: 20,
					slide_type: 'circle',
					btn_radius: '50%',
					btn_dim: 20,
					margin: '0 0px 0 0',
				}}
			/>
		</Panel>
	);
};

export default ThemeToggle;
