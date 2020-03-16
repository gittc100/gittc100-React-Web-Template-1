import React from 'react';
import styled from 'styled-components';
import Link from './Link';
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
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	height: 90%;
`;
const DivBottom = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;
const MainNav = props => {
	return (
		<Nav {...props}>
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
	);
};

export default MainNav;
