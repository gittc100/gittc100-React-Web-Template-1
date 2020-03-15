import React, { useContext, useState } from 'react';
import Panel from '../panel_components/Panel';
import HeaderTag from '../general_components/HeaderTag';
require('dotenv').config();

const ButtonPanel = props => {
	return (
		<Panel
			{...props}
			panel_config={{
				display: 'flex',
				flex_direction: 'column',
				justify_content: 'flex-start',
				align_items: 'center',
				width: '100%',
				height: '100%',
				padding: '20px 20px 20px 20px',
				border_radius: '10px 10px 10px 10px',
			}}
		>
			<HeaderTag
				header_config={{
					type: 'h2',
					text: 'Button Pallete',
					margin: '0 0 10px 0',
					color: props => props.theme.panel_text,
				}}
			/>
		</Panel>
	);
};

export default ButtonPanel;
