import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
require('dotenv').config();

const PageMain = styled.div`
    height: 100%;
    border: 1px solid purple;
	width: 100%;
	background-color: ${props => props.theme.page};
`;
const Page = props => {
	return <PageMain {...props} />;
};

export default Page;
