import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

const P = styled.p`
	font-weight: 600;
	font-size: 20px;
	color: ${props => props.color};
	margin-left: ${props => props.margin.left || 0};
	margin-right: ${props => props.margin.right || 0};
`

const PTAG = props => {
	return <P {...props}>{props.title}</P>;
};

export default PTAG;
