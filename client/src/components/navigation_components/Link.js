import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import SVG from '../general_components/SVG';
import PTag from '../general_components/PTag';
require('dotenv').config();

const NavLinkUpgrade = styled(NavLink)`
	display: ${props => (props.link_config && props.link_config.display ? props.link_config.display : 'flex')};
	justify-content: ${props =>
		props.link_config && props.link_config.justify_content ? props.link_config.justify_content : 'center'};
	align-items: ${props =>
		props.link_config && props.link_config.align_items ? props.link_config.align_items : 'center'};
	position: ${props => (props.link_config && props.link_config.position ? props.link_config.position : 'absolute')};
	padding: ${props => (props.link_config && props.link_config.padding ? props.link_config.padding : '0 0 0 0')};
	margin: ${props => (props.link_config && props.link_config.margin ? props.link_config.margin : '0 0 0 0')};
	height: ${props => (props.link_config && props.link_config.height ? props.link_config.height : '50px')};
	width: ${props =>
		props.hover ? 'auto' : props.link_config && props.link_config.width ? props.link_config.width : '50px'};
	bottom: ${props => (props.hover ? '0px' : '0px')};
	left: ${props => (props.hover ? '0px' : '0px')};
	background-color: ${props => (props.hover ? props.theme.link_sub : 'transparent')};
	border: 1px solid ${props => (props.hover ? props.theme.link_sub_border : 'transparent')};
	border-radius: ${props => (props.hover ? '25px 25px 25px 25px' : '50%')};
	text-decoration: ${props =>
		props.link_config && props.link_config.text_decoration ? props.link_config.text_decoration : 'none'};
	transition: 0.05s;
`;

const Link = props => {
	const [linkExpand, setLinkExpand] = useState(false);
	const [active, setActive] = useState(false);
	const [hover, setHover] = useState(false);
	const { to, title } = props.link_config;
	return (
		<NavLinkUpgrade
			{...props}
			exact={true}
			to={to}
			isActive={(match, location) => {
				if (match) {
					setActive(true);
				} else {
					setActive(false);
				}
			}}
			onMouseOver={event => {
				event.preventDefault();
				setHover(true);
				setLinkExpand(true);
			}}
			onMouseLeave={event => {
				event.preventDefault();
				setHover(false);
				setLinkExpand(false);
			}}
			onKeyUp={event => {
				if (event.which == 9) {
					setHover(true);
					setLinkExpand(true);
				}
			}}
			onKeyDown={event => {
				if (event.which == 9) {
					setHover(false);
					setLinkExpand(false);
				}
			}}
			hover={hover}
		>
			<SVG
				{...props}
				svg_config={{
					width: '30px',
					height: '30px',
					color: hover
						? props => props.theme.link_active
						: active
						? props => props.theme.link_hover
						: props => props.theme.link_inactive,
					type: props.link_config.type,
				}}
			/>
			{linkExpand ? (
				<PTag
					{...props}
					ptag_config={{
						title: title,
						color: props => props.theme.link_hover,
						margin: '0px 0px 0px 10px',
						font_weight: '600',
						font_size: '24px',
					}}
				/>
			) : null}
		</NavLinkUpgrade>
	);
};

export default Link;

// margin: '10px 10px 10px 10px',
