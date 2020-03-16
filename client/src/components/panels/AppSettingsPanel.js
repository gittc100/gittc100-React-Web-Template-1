import React, { useContext, useState, useEffect } from 'react';
import Panel from '../panel_components/Panel';
import HeaderTag from '../general_components/HeaderTag';
import ThemeToggle from '../theme_components/ThemeToggle';
import PTag from '../general_components/PTag';
import GlobalContext from '../../context/GlobalContext';
require('dotenv').config();

const AppSettingsPanel = props => {
	const context = useContext(GlobalContext);
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
				margin: '10px 0px 10px 10px',
				border_radius: '10px 10px 10px 10px',
				box_shadow: props => props.theme.panel_box_sadow,
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
					align_items: 'flex-start',
					flex_direction: 'column',
					width: '100%',
				}}
			>
				<PTag
					{...props}
					ptag_config={{
						title:
							'Dark theme turns the light surfaces of the page dark, creating an experience ideal for night. Try it out!',
						color: props => props.theme.panel_text,
						margin: '0px 0px 10px 0px',
						font_weight: '600',
						font_size: '18px',
						width: 'auto',
						white_space: 'wrap',
					}}
				/>
				<PTag
					{...props}
					ptag_config={{
						title: 'Your Dark theme setting will apply to this browser only.',
						color: props => props.theme.panel_text,
						margin: '0px 0px 10px 0px',
						font_weight: '600',
						font_size: '18px',
						width: 'auto',
						white_space: 'wrap',
					}}
				/>
			</Panel>

			<Panel
				{...props}
				panel_config={{
					display: 'flex',
					justify_content: 'flex-end',
					align_items: 'center',
					flex_direction: 'row',
					width: '100%',
				}}
			>
				<ThemeToggle />
			</Panel>
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
