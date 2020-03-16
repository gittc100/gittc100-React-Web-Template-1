import React from 'react';
import Page from '../page_components/Page';
import TitlePanel from '../panels/TitlePanel';
require('dotenv').config();

const HomePage = props => {
	return (
		<Page {...props} page_config={{ padding: '0px 0px 0px 0px' }}>
			<TitlePanel {...props} title_panel_config={{ page: 'Home' }} />
		</Page>
	);
};

export default HomePage;
