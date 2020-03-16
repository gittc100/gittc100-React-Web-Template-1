import React from 'react';
import Page from '../page_components/Page';
import HeaderTag from '../general_components/HeaderTag';
import TitlePanel from '../panels/TitlePanel';
import ThemeToggle from '../theme_components/ThemeToggle';
require('dotenv').config();

const HomePage = props => {
	return (
		<Page {...props} page_config={{ padding: '0px 0px 0px 0px' }}>
			<TitlePanel>
				<HeaderTag
					header_config={{
						type: 'h1',
						text: `${props.site_name} > Home`,
						padding: '10px 10px 10px 10px',
						color: props => props.theme.page_text,
					}}
				/>
				<ThemeToggle />
			</TitlePanel>
		</Page>
	);
};

export default HomePage;
