import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import GlobalContext from '../../context/GlobalContext';
import Link from './Link';
require('dotenv').config();

const Nav = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	min-height: 100%;
	background: ${props => props.theme.nav};
	width: 60px;
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
const DivTop = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	border: 1px solid red;
`;
const DivBottom = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	border: 1px solid blue;
`;
const SideNav = props => {
	const context = useContext(GlobalContext);
	return (
		<Nav>
			{/* <button
				onClick={event => {
					event.preventDefault();
					if (context.theme === 'dark') {
						context.toggleTheme('light');
					}
					if (context.theme === 'light') {
						context.toggleTheme('dark');
					}
				}}
			>
				click
			</button> */}
			<DivTop>
				<LinkCon>
					<Link
						{...props}
						config={{
							to: '/',
							type: 'home',
							sub_type: 'nav_link',
							title: 'Home',
						}}
					/>
				</LinkCon>
				<LinkCon>
					<Link
						{...props}
						config={{
							to: '/buttons',
							type: 'buttons',
							sub_type: 'nav_link',
							title: 'Buttons',
						}}
					/>
				</LinkCon>
				<LinkCon>
					<Link
						{...props}
						config={{
							to: '/buttons',
							type: 'buttons',
							sub_type: 'nav_link',
							title: 'Buttons',
						}}
					/>
				</LinkCon>
				<LinkCon>
					<Link
						{...props}
						config={{
							to: '/buttons',
							type: 'buttons',
							sub_type: 'nav_link',
							title: 'Buttons',
						}}
					/>
				</LinkCon>
				<LinkCon>
					<Link
						{...props}
						config={{
							to: '/buttons',
							type: 'buttons',
							sub_type: 'nav_link',
							title: 'Buttons',
						}}
					/>
				</LinkCon>
				<LinkCon>
					<Link
						{...props}
						config={{
							to: '/buttons',
							type: 'buttons',
							sub_type: 'nav_link',
							title: 'Buttons',
						}}
					/>
				</LinkCon>
				<LinkCon>
					<Link
						{...props}
						config={{
							to: '/buttons',
							type: 'buttons',
							sub_type: 'nav_link',
							title: 'Buttons',
						}}
					/>
				</LinkCon>
				<LinkCon>
					<Link
						{...props}
						config={{
							to: '/buttons',
							type: 'buttons',
							sub_type: 'nav_link',
							title: 'Buttons',
						}}
					/>
				</LinkCon>
				<LinkCon>
					<Link
						{...props}
						config={{
							to: '/buttons',
							type: 'buttons',
							sub_type: 'nav_link',
							title: 'Buttons',
						}}
					/>
				</LinkCon>
				<LinkCon>
					<Link
						{...props}
						config={{
							to: '/buttons',
							type: 'buttons',
							sub_type: 'nav_link',
							title: 'Buttons',
						}}
					/>
				</LinkCon>
				<LinkCon>
					<Link
						{...props}
						config={{
							to: '/buttons',
							type: 'buttons',
							sub_type: 'nav_link',
							title: 'Buttons',
						}}
					/>
				</LinkCon>
			</DivTop>
			<DivBottom>
				<LinkCon>
					<Link
						{...props}
						config={{
							to: '/settings',
							type: 'settings',
							sub_type: 'nav_link',
							title: 'Settings',
						}}
					/>
				</LinkCon>
			</DivBottom>
		</Nav>
	);
};

export default SideNav;
