import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import SVG from '../main_components/Button';
import PTAG from '../main_components/PTAG';
require('dotenv').config();

const NavLinkUpgrade = styled(NavLink)`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	height: 50px;
	width: ${props => (props.hover ? 'auto' : '50px')};
	bottom: 0px;
	left: 0px;
	background-color: ${props => (props.hover ? props.theme.link_sub : 'transparent')};
	border: 1px solid ${props => (props.hover ? props.theme.link_sub : 'transparent')};
	border-radius: ${props => (props.hover ? '25px 25px 25px 25px' : '50%')};
	text-decoration: none;
`;

const Link = props => {
	const [linkExpand, setLinkExpand] = useState(false);
	const [active, setActive] = useState(false);
	const [hover, setHover] = useState(false);
	const { to, title } = props.config;
	return (
		<NavLinkUpgrade
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
			<SVG {...props} active={active} hover={hover} svg_con={{ width: '35px', height: '35px' }} />
			{linkExpand ? (
				<PTAG
					{...props}
					title={title}
					color={props => props.theme.link_hover}
					margin={{ left: '10px', right: '10px' }}
				/>
			) : null}
		</NavLinkUpgrade>
	);
};

export default Link;
