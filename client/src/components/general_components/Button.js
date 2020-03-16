import React from 'react';
import styled from 'styled-components';
import SVG from './SVG';
import PTag from './PTag';
require('dotenv').config();

const BTN = styled.button`
	display: ${props => (props.button_config && props.button_config.display ? props.button_config.display : 'flex')};
	justify-content: ${props =>
		props.button_config && props.button_config.justify_content ? props.button_config.justify_content : 'center'};
	align-items: ${props =>
		props.button_config && props.button_config.align_items ? props.button_config.align_items : 'center'};
	height: ${props => (props.button_config && props.button_config.height ? props.button_config.height : 'auto')};
	width: ${props => (props.button_config && props.button_config.width ? props.button_config.width : 'auto')};
	background-color: ${props =>
		props.button_config && props.button_config.background_color
			? props.button_config.background_color
			: props.theme.button_active};
	border: ${props => (props.button_config && props.button_config.border ? props.button_config.border : 'none')};
	border-radius: ${props =>
		props.button_config && props.button_config.border_radius ? props.button_config.border_radius : 'none'};
	padding: ${props => (props.button_config && props.button_config.padding ? props.button_config.padding : '0 0 0 0')};
	margin: ${props => (props.button_config && props.button_config.margin ? props.button_config.margin : '0 0 0 0')};
	box-shadow: ${props =>
		props.button_config && props.button_config.button_box_sadow ? props.button_config.button_box_sadow : props.theme.button_box_sadow};
	cursor: ${props => (props.button_config && props.button_config.cursor ? props.button_config.cursor : 'pointer')};
	outline: ${props => (props.button_config && props.button_config.outline ? props.button_config.outline : true)};
	&:hover {
		background-color: ${props =>
			props.button_config && props.button_config.background_color_hover
				? props.button_config.background_color_hover
				: props.theme.button_hover};
	}
`;

const Button = props => {
	console.log('props', props);
	return (
		<BTN {...props}>
			{props.button_config && props.svg_config ? <SVG {...props} /> : null}
			{props.button_config && props.ptag_config ? <PTag {...props} /> : null}
		</BTN>
	);
};

export default Button;
