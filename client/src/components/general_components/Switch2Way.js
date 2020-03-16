import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
require('dotenv').config();

const SBTN = styled.button`
	transition: 0.4s;
	position: absolute;
	background-color: ${props =>
		props.switch_config && props.switch_config.btn_color
			? props.switch_config.btn_color
			: props => props.theme.button_active};
	border-radius: ${props =>
		props.switch_config && props.switch_config.btn_radius ? props.switch_config.btn_radius : '0'};
	height: ${props =>
		props.switch_config && props.switch_config.btn_dim ? props.switch_config.btn_dim + 'px' : '10px'};
	width: ${props =>
		props.switch_config && props.switch_config.btn_dim ? props.switch_config.btn_dim + 'px' : '10px'};
	left: ${props => (props.switch_config && props.switch_config.left ? props.switch_config.left : null)};
	bottom: ${props => (props.switch_config && props.switch_config.bottom ? props.switch_config.bottom : null)};
	border: ${props => (props.switch_config && props.switch_config.border ? props.switch_config.border : 'none')};
	box-shadow: ${props =>
		props.switch_config && props.switch_config.button_box_sadow ? props.switch_config.button_box_sadow : props.theme.button_box_sadow};
	outline: ${props => (props.switch_config && props.switch_config.outline ? props.switch_config.outline : true)};
	cursor: ${props => (props.switch_config && props.switch_config.cursor ? props.switch_config.cursor : 'pointer')};
	&:hover {
		background-color: ${props =>
			props.switch_config && props.switch_config.btn_color_hover
				? props.switch_config.btn_color_hover
				: props => props.theme.button_hover};
	}
`;

const Slide = styled.div`
	position: relative;
	height: ${props =>
		props.switch_config && props.switch_config.slide_height ? props.switch_config.slide_height + 'px' : '10px'};
	width: ${props =>
		props.switch_config && props.switch_config.slide_width ? props.switch_config.slide_width : '100%'};
	background-color: ${props =>
		props.switch_config && props.switch_config.slide_color ? props.switch_config.slide_color : 'white'};
	border-radius: ${props =>
		props.switch_config && props.switch_config.slide_radius ? props.switch_config.slide_radius : '0'};
	box-shadow: ${props =>
		props.switch_config && props.switch_config.button_box_sadow ? props.switch_config.button_box_sadow : props.theme.button_box_sadow};
	outline: ${props => (props.switch_config && props.switch_config.outline ? props.switch_config.outline : true)};
`;

const Wrapper = styled.div`
	display: ${props => (props.switch_config && props.switch_config.display ? props.switch_config.display : 'flex')};
	align-items: ${props =>
		props.switch_config && props.switch_config.align_items ? props.switch_config.align_items : 'center'};
	height: ${props => (props.switch_config && props.switch_config.height ? props.switch_config.height : 'auto')};
	width: ${props => (props.switch_config && props.switch_config.width ? props.switch_config.width : 'auto')};
	padding: ${props => (props.switch_config && props.switch_config.padding ? props.switch_config.padding : '0 0 0 0')};
	margin: ${props => (props.switch_config && props.switch_config.margin ? props.switch_config.margin : '0 0 0 0')};
	border: ${props => (props.switch_config && props.switch_config.border ? props.switch_config.border : 'none')};
	background-color: ${props =>
		props.switch_config && props.switch_config.background_color
			? props.switch_config.background_color
			: 'transparent'};

	outline: ${props => (props.switch_config && props.switch_config.outline ? props.switch_config.outline : true)};
`;

const Switch2Way = props => {
	let { position, callback, btn_dim, slide_height, slide_type } = props.switch_config;
	let left = null;
	let initial = position * 100;
	let leftAdd = (slide_height - btn_dim) / 2;
	let rightAdd = position * (btn_dim + 2 * leftAdd);
	let leftAdd2 = btn_dim / 2;
	console.log('rightAdd', rightAdd);
	console.log('leftAdd', leftAdd);
	console.log('leftAdd2', leftAdd2);
	if (slide_height >= btn_dim) {
		left = `calc(${initial}% - ${rightAdd}px + ${leftAdd}px)`;
	} else {
		left = `calc(${initial}% - ${leftAdd2}px)`;
	}
	let bottom = `${slide_height / 2 - btn_dim / 2}px`;
	const flipSwitch = () => {
		if (position === 0) {
			callback(1);
		} else if (position === 1) {
			callback(0);
		}
	};
	let colors = {
		0: { slide_color: props => props.theme.button_disabled_light, btn_color: props => props.theme.button_disabled },
		1: { slide_color: props => props.theme.button_hover, btn_color: props => props.theme.button_active },
	};

	return (
		<Wrapper {...props}>
			<Slide
				{...props}
				switch_config={{
					...props.switch_config,
					slide_radius: slide_type === 'circle' ? `${slide_height}px` : null,
					slide_color: colors[position].slide_color,
				}}
			>
				<SBTN
					{...props}
					switch_config={{
						...props.switch_config,
						left: left,
						bottom: bottom,
						btn_color: colors[position].btn_color,
						btn_color_hover: props.switch_config.disabled
							? props => props.theme.button_disabled
							: props => props.theme.button_hover,
						cursor: props.switch_config.disabled ? 'inherit' : null,
					}}
					onClick={event => {
						event.preventDefault();
						if (!props.switch_config.disabled) {
							flipSwitch();
						}
					}}
				/>
			</Slide>
		</Wrapper>
	);
};

export default Switch2Way;
