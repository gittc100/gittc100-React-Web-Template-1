import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import GlobalContext from '../../context/GlobalContext';
import SVG from './SVG';
require('dotenv').config();

const BTN = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: transparent;
	border: 1px solid transparent;
	height: 100%;
	width: 100%;
	border-radius: 50%;
	cursor: pointer;
`;

const Button = props => {
	return (
		<BTN>
			<SVG {...props} />
		</BTN>
	);
};

export default Button;
