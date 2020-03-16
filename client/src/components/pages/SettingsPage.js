import React from 'react';
import Page from '../page_components/Page';
import AppSettingsPanel from '../panels/AppSettingsPanel';
import UserSettingsPanel from '../panels/UserSettingsPanel';
import TitlePanel from '../panels/TitlePanel';
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
				padding: '0px 10px 0px 0px',
				background_color: 'transparent',
				overflow_y: 'auto',
			}}
		/>
	);
};

const SettingsPage = props => {
	return (
		<Page {...props} page_config={{ padding: '0px 0px 0px 0px' }}>
			<TitlePanel {...props} title_panel_config={{ page: 'Settings' }} />
			<SettingsBodyPanel>
				<UserSettingsPanel {...props} />
				<AppSettingsPanel {...props} />
			</SettingsBodyPanel>
		</Page>
	);
};

export default SettingsPage;

{
	/* <div
					style={{
						border: '1px solid red',
						grid_row_start: 2,
						grid_row_end: 3,
						grid_column_start: 2,
						grid_column_end: 3,
					}}
				></div> */
}

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
