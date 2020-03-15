import React from 'react';
import styled from 'styled-components';
require('dotenv').config();

const PageMain = styled.div`
	display: ${props => (props.page_config && props.page_config.display ? props.page_config.display : 'flex')};
	flex-direction: ${props =>
		props.page_config && props.page_config.flex_direction ? props.page_config.flex_direction : 'column'};
	justify-content: ${props =>
		props.page_config && props.page_config.justify_content ? props.page_config.justify_content : 'flex-start'};
	align-items: ${props =>
		props.page_config && props.page_config.align_item ? props.page_config.align_item : 'center'};
	height: ${props => (props.page_config && props.page_config.height ? props.page_config.height : '100%')};
	width: ${props => (props.page_config && props.page_config.width ? props.page_config.width : '100%')};
	padding: ${props => (props.page_config && props.page_config.padding ? props.page_config.padding : '0 0 0 0')};
	margin: ${props => (props.page_config && props.page_config.margin ? props.page_config.margin : '0 0 0 0')};
	background-color: ${props => props.theme.page_base};

`;
const Page = props => {
	return <PageMain {...props} />;
};

export default Page;
