import React from 'react';
import Page from '../page_components/Page';
import HeaderTag from '../general_components/HeaderTag';
import TitlePanel from '../panels/TitlePanel';
require('dotenv').config();

const HomePage = props => {
	return (
		<Page {...props} page_config={{ padding: '10px 10px 10px 10px' }}>
			<TitlePanel>
				<HeaderTag
					header_config={{
						type: 'h1',
						text: `${props.site_name} > Home`,
						margin: '10px 0 10px 0',
						color: props => props.theme.page_text,
					}}
				/>
			</TitlePanel>
		</Page>
	);
};

export default HomePage;