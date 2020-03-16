import React from 'react';
import Panel from '../panel_components/Panel';
import HeaderTag from '../general_components/HeaderTag';
import ThemeToggle from '../theme_components/ThemeToggle';
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
				padding: '0px 20px 0px 0px',
				background_color: 'transparent',
				box_shadow: props => props.theme.title_panel_box_sadow,
				z_index: 2,
			}}
		>
			<HeaderTag
			{...props}
				header_config={{
					type: 'h1',
					text: `${props.site_name} - ${props.title_panel_config.page}`,
					padding: '10px 10px 10px 10px',
					color: props => props.theme.page_text,
				}}
			/>
			<ThemeToggle />
		</Panel>
	);
};

export default TitlePanel;
