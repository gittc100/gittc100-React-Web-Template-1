import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import GlobalContext from '../../context/GlobalContext';
require('dotenv').config();

// 2.5
const Select = styled.select`
	font-weight: ${props =>
		props.select_config && props.select_config.font_weight ? props.select_config.font_weight : '400'};
	font-size: ${props =>
		props.select_config && props.select_config.font_size ? props.select_config.font_size : '16px'};
	color: ${props =>
		props.select_config && props.select_config.color
			? props.select_config.color
			: props => props.theme.button_text};
	display: ${props => (props.select_config && props.select_config.display ? props.select_config.display : 'flex')};
	justify-content: ${props =>
		props.select_config && props.select_config.justify_content ? props.select_config.justify_content : 'center'};
	align-items: ${props =>
		props.select_config && props.select_config.align_items ? props.select_config.align_items : 'center'};
	height: ${props => (props.select_config && props.select_config.height ? props.select_config.height : 'auto')};
	width: ${props => (props.select_config && props.select_config.width ? props.select_config.width : 'auto')};
	background-color: ${props =>
		props.select_config && props.select_config.background_color
			? props.select_config.background_color
			: props => props.theme.button_active};
	border: ${props => (props.select_config && props.select_config.border ? props.select_config.border : 'none')};
	border-radius: ${props =>
		props.select_config && props.select_config.border_radius ? props.select_config.border_radius : 'none'};
	padding: ${props => (props.select_config && props.select_config.padding ? props.select_config.padding : '0 0 0 0')};
	margin: ${props => (props.select_config && props.select_config.margin ? props.select_config.margin : '0 0 0 0')};
	box-shadow: ${props =>
		props.select_config && props.select_config.button_box_sadow ? props.select_config.button_box_sadow : props.theme.button_box_sadow};
	cursor: ${props => (props.select_config && props.select_config.cursor ? props.select_config.cursor : 'pointer')};
	outline: ${props => (props.select_config && props.select_config.outline ? props.select_config.outline : true)};
	option {
		font-weight: ${props =>
			props.select_config && props.select_config.font_weight ? props.select_config.font_weight : '400'};
		font-size: ${props =>
			props.select_config && props.select_config.font_size ? props.select_config.font_size : '16px'};
		cursor: ${props =>
			props.select_config && props.select_config.cursor ? props.select_config.cursor : 'pointer'};
	}
	&:hover {
		background-color: ${props =>
			props.select_config && props.select_config.background_color_hover
				? props.select_config.background_color_hover
				: props.theme.button_hover};
	}
`;

const createOptionsList = options => {
	return options.map((item, index) => {
		return (
			<option key={item.key} value={item.key}>
				{item.value.title}
			</option>
		);
	});
};

const Selector = props => {
	const context = useContext(GlobalContext);
	let { options, callback } = props.select_config;
	return (
		<Select
			{...props}
			value={context.theme}
			onChange={event => {
				event.preventDefault();
				callback(event.target.value);
			}}
			disabled={props.select_config.disabled}
		>
			{createOptionsList(options)}
		</Select>
	);
};

export default Selector;
