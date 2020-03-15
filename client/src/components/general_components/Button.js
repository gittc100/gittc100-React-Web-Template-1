import React from 'react';
import styled from 'styled-components';
import SVG from './SVG';
require('dotenv').config();

const BTN = styled.button`
	display: ${props => (props.button_config && props.button_config.display ? props.button_config.display : 'flex')};
	justify-content: ${props =>
		props.button_config && props.button_config.justify_content ? props.button_config.justify_content : 'center'};
	align-items: ${props =>
		props.button_config && props.button_config.align_items ? props.button_config.align_items : 'center'};
	height: ${props => (props.button_config && props.button_config.height ? props.button_config.height : '100%')};
	width: ${props => (props.button_config && props.button_config.width ? props.button_config.width : '100%')};
	background-color: ${props =>
		props.button_config && props.button_config.background_color
			? props.button_config.background_color
			: 'transparent'};
	border: ${props => (props.button_config && props.button_config.border ? props.button_config.border : 'none')};
	border-radius: ${props =>
		props.button_config && props.button_config.border_radius ? props.button_config.border_radius : 'none'};
	padding: ${props => (props.button_config && props.button_config.padding ? props.button_config.padding : '0 0 0 0')};
	margin: ${props => (props.button_config && props.button_config.margin ? props.button_config.margin : '0 0 0 0')};
	cursor: ${props => (props.button_config && props.button_config.cursor ? props.button_config.cursor : 'pointer')};
`;

const Button = props => {
	return (
		<BTN>
			<SVG {...props} />
		</BTN>
	);
};

export default Button;
