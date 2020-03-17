import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Link from './Link';
import Button from '../general_components/Button';
require('dotenv').config();

const Nav = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 100vh;
	background: ${props => props.theme.nav};
	width: 60px;
	box-shadow: ${props => props.theme.nav_box_sadow};
	z-index: 3;
	@media (max-width: 600px) {
		position: absolute;
		background: transparent;
		width: auto;
		height: auto;
		border-radius: 50%;
		top: 10px;
		left: 10px;
	}
`;

const LinkCon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	height: 50px;
	width: 50px;
	border-radius: 50%;
	cursor: pointer;
	margin-top: 5px;
	margin-bottom: 5px;
`;

const HamCon = styled(LinkCon)`
	height: auto;
	width: auto;
	margin: 0;
	z-index: 10;
	@media (min-width: 600px) {
		display: none;
	}
`;

const DivTop = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	height: 90%;
	@media (max-width: 600px) {
		display: none;
	}
`;
const DivBottom = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	@media (max-width: 600px) {
		display: none;
	}
`;

const PhoneNav = styled.div`
	${props =>
		props.nav_config && props.nav_config.open === true
			? css`
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					position: absolute;
					top: 0px;
					left: 0px;
					width: 100vw;
					height: 100vh;
					background: rgba(0, 0, 0, 0.95);
					z-index: 1;
			  `
			: css`
					display: none;
			  `}
`;

const PhoneLinkCon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: auto;
	width: 100%;
	border-radius: 50%;
	cursor: pointer;
	margin-top: 5px;
	margin-bottom: 5px;
	// background-color: white;
`;

const MainNav = props => {
	const [icon, setIcon] = useState('hamburger');
	const [navOpen, setNavOpen] = useState(false);

	return (
		<>
			<PhoneNav
				nav_config={{
					open: navOpen,
				}}
			>
				<PhoneLinkCon
					onClick={event => {
						setNavOpen(false);
						setIcon('hamburger');
					}}
				>
					<Link
						{...props}
						link_config={{
							to: '/',
							type: 'home',
							sub_type: 'nav_link',
							title: 'Home',
							padding: '10px',
							position: 'initial',
							lock: 'open',
						}}
					/>
				</PhoneLinkCon>
				<PhoneLinkCon
					onClick={event => {
						setNavOpen(false);
						setIcon('hamburger');
					}}
				>
					<Link
						{...props}
						link_config={{
							to: '/main-components',
							type: 'main-components',
							sub_type: 'nav_link',
							title: 'Main Components',
							padding: '10px',
							position: 'initial',
							lock: 'open',
						}}
					/>
				</PhoneLinkCon>
				<PhoneLinkCon
					onClick={event => {
						setNavOpen(false);
						setIcon('hamburger');
					}}
				>
					<Link
						{...props}
						link_config={{
							to: '/settings',
							type: 'settings',
							sub_type: 'nav_link',
							title: 'Settings',
							padding: '10px',
							position: 'initial',
							lock: 'open',
						}}
					/>
				</PhoneLinkCon>
			</PhoneNav>
			<Nav {...props}>
				<HamCon>
					<Button
						{...props}
						onClick={event => {
							event.preventDefault();
							if (icon === 'hamburger') {
								setIcon('close');
								setNavOpen(true);
							} else if (icon === 'close') {
								setIcon('hamburger');
								setNavOpen(false);
							}
						}}
						svg_config={{ width: '30px', height: '30px', type: icon }}
						button_config={{
							padding: '5px',
							border_radius: '50%',
						}}
					/>
				</HamCon>

				<DivTop>
					<LinkCon>
						<Link
							{...props}
							link_config={{
								to: '/',
								type: 'home',
								sub_type: 'nav_link',
								title: 'Home',
								padding: '10px',
							}}
						/>
					</LinkCon>
					<LinkCon>
						<Link
							{...props}
							link_config={{
								to: '/main-components',
								type: 'main-components',
								sub_type: 'nav_link',
								title: 'Main Components',
								padding: '10px',
							}}
						/>
					</LinkCon>
				</DivTop>
				<DivBottom>
					<LinkCon>
						<Link
							{...props}
							link_config={{
								to: '/settings',
								type: 'settings',
								sub_type: 'nav_link',
								title: 'Settings',
								padding: '10px',
							}}
						/>
					</LinkCon>
				</DivBottom>
			</Nav>
		</>
	);
};

export default MainNav;
