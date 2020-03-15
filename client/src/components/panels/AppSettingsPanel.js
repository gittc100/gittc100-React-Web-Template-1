import React, { useContext, useState, useEffect } from 'react';
import Panel from '../panel_components/Panel';
import HeaderTag from '../general_components/HeaderTag';
import Selector from '../general_components/Selector';
import PTag from '../general_components/PTag';
import GlobalContext from '../../context/GlobalContext';
import Switch from '../general_components/Switch';
require('dotenv').config();

const AppSettingsPanel = props => {
	const context = useContext(GlobalContext);
	const [options, setOptions] = useState([]);

	useEffect(() => {
		if (options.length === 0 && Object.keys(context.themes).length > 0) {
			let array = [];
			for (let x = 0; x < Object.keys(context.themes).length; x++) {
				array.push({
					key: Object.keys(context.themes)[x],
					value: context.themes[Object.keys(context.themes)[x]],
				});
			}
			setOptions(array);
		}
	}, [options, context, context.themes]);

	const switchTheme = theme => {
		context.toggleTheme(theme);
	};
	return (
		<Panel
			{...props}
			panel_config={{
				display: 'flex',
				flex_direction: 'column',
				justify_content: 'flex-start',
				align_items: 'center',
				width: '100%',
				max_width: '400px',
				min_width: '150px',
				height: '400px',
				padding: '20px 20px 20px 20px',
				margin: '10px 10px 10px 0px',
				border_radius: '10px 10px 10px 10px',
			}}
		>
			<HeaderTag
				header_config={{
					type: 'h2',
					text: 'Application Settings',
					margin: '0 0 10px 0',
					color: props => props.theme.panel_text,
				}}
			/>
			<Panel
				{...props}
				panel_config={{
					display: 'flex',
					justify_content: 'center',
					align_items: 'center',
					flex_direction: 'row',
					width: '100%',
					border_radius: '1px solid red',
				}}
			>
				<PTag
					{...props}
					ptag_config={{
						title: 'Theme:',
						color: props => props.theme.panel_text,
						margin: '0px 10px 0px 0px',
						font_weight: '600',
						font_size: '20px',
					}}
				/>
				<Selector {...props} select_config={{ options: options, callback: switchTheme }} />
			</Panel>
			<Switch
				switch_config={{
					options: options,
					callback: switchTheme,
					slide_height: '20px',
					slide_radius: '10px',
					slide_background_color: props => props.theme.page_base,
				}}
			/>
		</Panel>
	);
};

export default AppSettingsPanel;

// Dark theme turns the light surfaces of the page dark, creating an experience ideal for night. Try it out!
// Your Dark theme setting will apply to this browser only.

// display: 'flex',
// flex_direction: 'column',
// justify_content: 'flex-start',
// align_items: 'center',
// width: '100%',
// height: '100%',
// padding: '20px 20px 20px 20px',
// border_radius: '10px 10px 10px 10px',
// grid_row_start: 1,
// grid_row_end: 2,
// grid_column_start: 2,
// grid_column_end: 3,
