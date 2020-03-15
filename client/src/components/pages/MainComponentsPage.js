import React from 'react';
import Page from '../page_components/Page';
import HeaderTag from '../general_components/HeaderTag';
import TitlePanel from '../panels/TitlePanel';
import MainComponentsBodyPanel from '../panels/MainComponentsBodyPanel';
import ButtonPanel from '../panels/ButtonPanel';
require('dotenv').config();

const MainComponentsPage = props => {
	return (
		<Page {...props} page_config={{ padding: '10px 10px 10px 10px' }}>
			<TitlePanel {...props}>
				<HeaderTag
					header_config={{
						type: 'h1',
						text: `${props.site_name} > Main Components`,
						margin: '10px 0 10px 0',
						color: props => props.theme.page_text,
					}}
				/>
			</TitlePanel>
			<MainComponentsBodyPanel {...props}>
				<ButtonPanel {...props} />
			</MainComponentsBodyPanel>
		</Page>
	);
};

export default MainComponentsPage;
