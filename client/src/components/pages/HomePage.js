import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
// import Page from './Page';
require('dotenv').config();

const Page = styled.div`
    height: 100%;
    border: 1px solid purple;
	width: 100%;
	background-color: ${props => props.theme.page};
`;

const HomePage = props => {
	return <Page {...props}>
		text
	</Page>;
};

export default HomePage;
