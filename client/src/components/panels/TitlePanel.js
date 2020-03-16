import React from 'react';
import Panel from '../panel_components/Panel';
require('dotenv').config();

const TitlePanel = props => {
	return (
		<Panel
			{...props}
			panel_config={{
                display: 'flex',
				justify_content: 'space-between',
				align_items: 'center',
				flex_direction: 'row',
				width: '100%',
				padding: '0px 0px',
				background_color: 'transparent',
				box_shadow: props => props.theme.title_panel_box_sadow,
				z_index: 2,
			}}
		></Panel>
	);
};

export default TitlePanel;
