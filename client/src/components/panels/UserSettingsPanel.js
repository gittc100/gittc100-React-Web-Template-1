import React, { useContext, useState } from 'react';
import Panel from '../panel_components/Panel';
import HeaderTag from '../general_components/HeaderTag';
require('dotenv').config();

const UserSettingsPanel = props => {
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
				height: '800px',
				padding: '20px 20px 20px 20px',
				margin: '10px 10px 10px 0px',
				border_radius: '10px 10px 10px 10px',
			}}
		>
			<HeaderTag
				header_config={{
					type: 'h2',
					text: 'Users Settings Panel',
					margin: '0 0 10px 0',
					color: props => props.theme.panel_text,
				}}
			/>
		</Panel>
	);
};

export default UserSettingsPanel;

// display: 'flex',
// flex_direction: 'column',
// justify_content: 'flex-start',
// align_items: 'center',
// width: '100%',
// height: '100%',
// padding: '20px 20px 20px 20px',
// border_radius: '10px 10px 10px 10px',
// grid_row_start: 1,
// grid_row_end: 3,
// grid_column_start: 1,
// grid_column_end: 2,
