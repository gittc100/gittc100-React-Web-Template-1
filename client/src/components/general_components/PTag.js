import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

const P = styled.p`
	font-weight: ${props =>
		props.ptag_config && props.ptag_config.font_weight ? props.ptag_config.font_weight : '400'};
	font-size: ${props => (props.ptag_config && props.ptag_config.font_size ? props.ptag_config.font_size : '16px')};
	color: ${props => props.ptag_config.color};
	padding: ${props => (props.ptag_config && props.ptag_config.padding ? props.ptag_config.padding : '0 0 0 0')};
	margin: ${props => (props.ptag_config && props.ptag_config.margin ? props.ptag_config.margin : '0 0 0 0')};
	white-space: ${props =>
		props.ptag_config && props.ptag_config.white_space ? props.ptag_config.white_space : 'nowrap'};
	height: ${props => (props.ptag_config && props.ptag_config.height ? props.ptag_config.height : 'auto')};
	width: ${props => (props.ptag_config && props.ptag_config.width ? props.ptag_config.width : 'auto')};
`;

const PTag = props => {
	return <P {...props}>{props.ptag_config.title}</P>;
};

export default PTag;
