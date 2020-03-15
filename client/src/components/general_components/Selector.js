import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import GlobalContext from '../../context/GlobalContext';
require('dotenv').config();

const Select = styled.select`
	width: 140px;
	padding: 2.5px;
	background-color: ${props => props.theme.page_base};
	border-radius: 3px;
	border: none;
	font-size: 20px;
	font-weight: 600;
	cursor: pointer;
	color: ${props => props.theme.panel_text};
	option {
		font-size: 20px;
		cursor: pointer;
	}
`;

const createOptionsList = options => {
	return options.map((item, index) => {
		console.log('item', item);
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
			value={context.theme}
			onChange={event => {
				event.preventDefault();
				callback(event.target.value);
			}}
		>
			{createOptionsList(options)}
		</Select>
	);
};

export default Selector;
