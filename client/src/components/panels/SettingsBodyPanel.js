import React from 'react';
import Panel from '../panel_components/Panel';
require('dotenv').config();

const SettingsBodyPanel = props => {
	return (
		<Panel
			{...props}
			panel_config={{
				display: 'flex',
				justify_content: 'flex-start',
				align_items: 'flex-start',
				flex_direction: 'row',
				flex_wrap: 'wrap',
				width: '100%',
				height: '100%',
				padding: '0px 0px',
				background_color: 'transparent',
				overflow_y: 'auto'
			}}
		></Panel>
	);
};

export default SettingsBodyPanel;

// display: 'flex',
// justify_content: 'space-between',
// align_items: 'flex-start',
// flex_direction: 'row',
// width: '100%',
// padding: '0px 0px',
// background_color: 'transparent',

// display: 'grid',
// grid_template_columns: 'auto auto',
// grid_gap: '10px',
// width: '100%',
// height: '100%',
// padding: '0px 0px',
// background_color: 'transparent',
// media: {
// 	width1:{
// 		width: '600px',
// 		display: 'flex',
// 		flex_direction: 'column',
// 		overflow_y: 'scroll'
// 	}
// }
