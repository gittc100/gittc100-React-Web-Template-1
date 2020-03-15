import React from 'react';
import Panel from '../panel_components/Panel';
require('dotenv').config();

const MainComponentsBodyPanel = props => {
	return (
		<Panel
			{...props}
			panel_config={{
				display: 'flex',
				flex_direction: 'column',
				justify_content: 'space_between',
				align_items: 'center',
				width: '100%',
				height: '100%',
				padding: '0px 0px',
				background_color: 'transparent',
			}}
		></Panel>
	);
};

export default MainComponentsBodyPanel;

