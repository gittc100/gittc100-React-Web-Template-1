import React from 'react';
import styled from 'styled-components';
require('dotenv').config();

const H1 = styled.h1`
	display: ${props => (props.header_config && props.header_config.display ? props.header_config.display : 'flex')};
	justify-content: ${props =>
		props.header_config && props.header_config.justify_content ? props.header_config.justify_content : 'center'};
	align-items: ${props =>
		props.header_config && props.header_config.align_items ? props.header_config.align_items : 'center'};
	background-color: ${props =>
		props.header_config && props.header_config.background_color
			? props.header_config.background_color
			: 'transparent'};
	font-size: ${props =>
		props.header_config && props.header_config.font_size ? props.header_config.font_size : '24px'};
	font-weight: ${props =>
		props.header_config && props.header_config.font_weight ? props.header_config.font_weight : '600'};
	padding: ${props => (props.header_config && props.header_config.padding ? props.header_config.padding : '0 0 0 0')};
	margin: ${props => (props.header_config && props.header_config.margin ? props.header_config.margin : '0 0 0 0')};
	color: ${props => (props.header_config && props.header_config.color ? props.header_config.color : 'black')};
`;
const H2 = styled.h2`
	display: flex;
	justify-content: ${props =>
		props.header_config && props.header_config.justify_content ? props.header_config.justify_content : 'center'};
	align-items: ${props =>
		props.header_config && props.header_config.align_items ? props.header_config.align_items : 'center'};
	background-color: ${props =>
		props.header_config && props.header_config.background_color
			? props.header_config.background_color
			: 'transparent'};
	font-size: ${props =>
		props.header_config && props.header_config.font_size ? props.header_config.font_size : '22px'};
	font-weight: ${props =>
		props.header_config && props.header_config.font_weight ? props.header_config.font_weight : '600'};
	padding: ${props => (props.header_config && props.header_config.padding ? props.header_config.padding : '0 0 0 0')};
	margin: ${props => (props.header_config && props.header_config.margin ? props.header_config.margin : '0 0 0 0')};
	color: ${props => (props.header_config && props.header_config.color ? props.header_config.color : 'black')};
`;

const H3 = styled.h3`
	display: flex;
	justify-content: ${props =>
		props.header_config && props.header_config.justify_content ? props.header_config.justify_content : 'center'};
	align-items: ${props =>
		props.header_config && props.header_config.align_items ? props.header_config.align_items : 'center'};
	background-color: ${props =>
		props.header_config && props.header_config.background_color
			? props.header_config.background_color
			: 'transparent'};
	font-size: ${props =>
		props.header_config && props.header_config.font_size ? props.header_config.font_size : '20px'};
	font-weight: ${props =>
		props.header_config && props.header_config.font_weight ? props.header_config.font_weight : '600'};
	padding: ${props => (props.header_config && props.header_config.padding ? props.header_config.padding : '0 0 0 0')};
	margin: ${props => (props.header_config && props.header_config.margin ? props.header_config.margin : '0 0 0 0')};
	color: ${props => (props.header_config && props.header_config.color ? props.header_config.color : 'black')};
`;
const H4 = styled.h4`
	display: flex;
	justify-content: ${props =>
		props.header_config && props.header_config.justify_content ? props.header_config.justify_content : 'center'};
	align-items: ${props =>
		props.header_config && props.header_config.align_items ? props.header_config.align_items : 'center'};
	background-color: ${props =>
		props.header_config && props.header_config.background_color
			? props.header_config.background_color
			: 'transparent'};
	font-size: ${props =>
		props.header_config && props.header_config.font_size ? props.header_config.font_size : '18px'};
	font-weight: ${props =>
		props.header_config && props.header_config.font_weight ? props.header_config.font_weight : '600'};
	padding: ${props => (props.header_config && props.header_config.padding ? props.header_config.padding : '0 0 0 0')};
	margin: ${props => (props.header_config && props.header_config.margin ? props.header_config.margin : '0 0 0 0')};
	color: ${props => (props.header_config && props.header_config.color ? props.header_config.color : 'black')};
`;
const H5 = styled.h5`
	display: flex;
	justify-content: ${props =>
		props.header_config && props.header_config.justify_content ? props.header_config.justify_content : 'center'};
	align-items: ${props =>
		props.header_config && props.header_config.align_items ? props.header_config.align_items : 'center'};
	background-color: ${props =>
		props.header_config && props.header_config.background_color
			? props.header_config.background_color
			: 'transparent'};
	font-size: ${props =>
		props.header_config && props.header_config.font_size ? props.header_config.font_size : '16px'};
	font-weight: ${props =>
		props.header_config && props.header_config.font_weight ? props.header_config.font_weight : '600'};
	padding: ${props => (props.header_config && props.header_config.padding ? props.header_config.padding : '0 0 0 0')};
	margin: ${props => (props.header_config && props.header_config.margin ? props.header_config.margin : '0 0 0 0')};
	color: ${props => (props.header_config && props.header_config.color ? props.header_config.color : 'black')};
`;
const H6 = styled.h6`
	display: flex;
	justify-content: ${props =>
		props.header_config && props.header_config.justify_content ? props.header_config.justify_content : 'center'};
	align-items: ${props =>
		props.header_config && props.header_config.align_items ? props.header_config.align_items : 'center'};
	background-color: ${props =>
		props.header_config && props.header_config.background_color
			? props.header_config.background_color
			: 'transparent'};
	font-size: ${props =>
		props.header_config && props.header_config.font_size ? props.header_config.font_size : '14px'};
	font-weight: ${props =>
		props.header_config && props.header_config.font_weight ? props.header_config.font_weight : '600'};
	padding: ${props => (props.header_config && props.header_config.padding ? props.header_config.padding : '0 0 0 0')};
	margin: ${props => (props.header_config && props.header_config.margin ? props.header_config.margin : '0 0 0 0')};
	color: ${props => (props.header_config && props.header_config.color ? props.header_config.color : 'black')};
`;

const HeaderTag = props => {
	if (props.header_config.type === 'h1') {
		return <H1 {...props}>{props.header_config.text}</H1>;
	} else if (props.header_config.type === 'h2') {
		return <H2 {...props}>{props.header_config.text}</H2>;
	} else if (props.header_config.type === 'h3') {
		return <H3 {...props}>{props.header_config.text}</H3>;
	} else if (props.header_config.type === 'h4') {
		return <H4 {...props}>{props.header_config.text}</H4>;
	} else if (props.header_config.type === 'h2') {
		return <H5 {...props}>{props.header_config.text}</H5>;
	} else if (props.header_config.type === 'h2') {
		return <H6 {...props}>{props.header_config.text}</H6>;
	}
};

export default HeaderTag;
