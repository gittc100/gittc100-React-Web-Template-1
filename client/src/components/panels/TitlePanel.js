import React from 'react';
import Panel from '../panel_components/Panel';
require('dotenv').config();

const TitlePanel = props => {
	return (
		<Panel
			{...props}
			panel_config={{
                display: 'flex',
				justify_content: 'flex-start',
				align_items: 'center',
				flex_direction: 'row',
				width: '100%',
				padding: '0px 0px',
				background_color: 'transparent',
			}}
		></Panel>
	);
};

export default TitlePanel;
