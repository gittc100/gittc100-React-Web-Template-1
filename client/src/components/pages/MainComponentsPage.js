import React from 'react';
import Page from '../page_components/Page';
import Panel from '../panel_components/Panel';
import TitlePanel from '../panels/TitlePanel';
import ButtonPanel from '../panels/ButtonPanel';
import SelectorPanel from '../panels/SelectorPanel';
import SwitchPanel from '../panels/SwitchPanel';
require('dotenv').config();

const MainComponentsBodyPanel = props => {
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
				padding: '0px 10px 0px 0px',
				background_color: 'transparent',
				overflow_y: 'auto',
			}}
		></Panel>
	);
};

const MainComponentsPage = props => {
	return (
		<Page {...props} page_config={{ padding: '0px 0px 0px 0px' }}>
			<TitlePanel {...props} title_panel_config={{ page: 'Main Components' }} />
			<MainComponentsBodyPanel {...props}>
				<ButtonPanel {...props} />
				<SelectorPanel {...props} />
				<SwitchPanel {...props} />
			</MainComponentsBodyPanel>
		</Page>
	);
};

export default MainComponentsPage;
