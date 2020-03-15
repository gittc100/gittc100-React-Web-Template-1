import React from 'react';
import Page from '../page_components/Page';
import HeaderTag from '../general_components/HeaderTag';
import AppSettingsPanel from '../panels/AppSettingsPanel';
import UserSettingsPanel from '../panels/UserSettingsPanel';
import TitlePanel from '../panels/TitlePanel';
import SettingsBodyPanel from '../panels/SettingsBodyPanel';
require('dotenv').config();

const SettingsPage = props => {
	return (
		<Page {...props} page_config={{ padding: '10px 10px 10px 10px' }}>
			<TitlePanel>
				<HeaderTag
					header_config={{
						type: 'h1',
						text: `${props.site_name} > Settings`,
						margin: '10px 0 10px 0px',
						color: props => props.theme.page_text,
					}}
				/>
			</TitlePanel>
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
