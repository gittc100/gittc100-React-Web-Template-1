import React from 'react';
import styled, { css } from 'styled-components';
require('dotenv').config();

const PANEL = styled.div`
	display: ${props => (props.panel_config && props.panel_config.display ? props.panel_config.display : null)};
	flex-direction: ${props =>
		props.panel_config && props.panel_config.flex_direction ? props.panel_config.flex_direction : null};
	justify-content: ${props =>
		props.panel_config && props.panel_config.justify_content ? props.panel_config.justify_content : null};
	align-items: ${props =>
		props.panel_config && props.panel_config.align_items ? props.panel_config.align_items : null};
	flex-wrap: ${props => (props.panel_config && props.panel_config.flex_wrap ? props.panel_config.flex_wrap : 'none')};
	overflow-y: ${props =>
		props.panel_config && props.panel_config.overflow_y ? props.panel_config.overflow_y : 'none'};
	height: ${props => (props.panel_config && props.panel_config.height ? props.panel_config.height : 'auto')};
	width: ${props => (props.panel_config && props.panel_config.width ? props.panel_config.width : 'auto')};
	min-width: ${props => (props.panel_config && props.panel_config.min_width ? props.panel_config.min_width : null)};
	max-width: ${props => (props.panel_config && props.panel_config.max_width ? props.panel_config.max_width : null)};
	padding: ${props => (props.panel_config && props.panel_config.padding ? props.panel_config.padding : '0 0 0 0')};
	margin: ${props => (props.panel_config && props.panel_config.margin ? props.panel_config.margin : '0 0 0 0')};
	border: ${props => (props.panel_config && props.panel_config.border ? props.panel_config.border : 'none')};
	border-radius: ${props =>
		props.panel_config && props.panel_config.border_radius ? props.panel_config.border_radius : 'none'};
	background-color: ${props =>
		props.panel_config && props.panel_config.background_color
			? props.panel_config.background_color
			: props.theme.panel_base};
	box-shadow: ${props =>
		props.panel_config && props.panel_config.box_shadow ? props.panel_config.box_shadow : 'none'};
	z-index: ${props => (props.panel_config && props.panel_config.z_index ? props.panel_config.z_index : '0')};
`;
const Panel = props => {
	return <PANEL {...props} />;
};

export default Panel;

// grid-template-columns: ${props =>
// 	props.panel_config && props.panel_config.grid_template_columns
// 		? props.panel_config.grid_template_columns
// 		: null};
// grid-row-start: ${props =>
// 	props.panel_config && props.panel_config.grid_row_start ? props.panel_config.grid_row_start : null};
// grid-row-end: ${props =>
// 	props.panel_config && props.panel_config.grid_row_end ? props.panel_config.grid_row_end : null};
// grid-column-start: ${props =>
// 	props.panel_config && props.panel_config.grid_column_start ? props.panel_config.grid_column_start : null};
// grid-column-end: ${props =>
// 	props.panel_config && props.panel_config.grid_column_end ? props.panel_config.grid_column_end : null};
// grid-gap: ${props => (props.panel_config && props.panel_config.grid_gap ? props.panel_config.grid_gap : null)};

// ${props =>
// 	props.panel_config && props.panel_config.media && props.panel_config.media.width1
// 		? css`
// 				@media(max-width: ${props.panel_config.media.width1.width}) {
// 					display: ${
// 						props.panel_config.media.width1.display
// 							? props.panel_config.media.width1.display
// 							: props.panel_config.display
// 							? props.panel_config.display
// 							: null
// 					};
// 					flex-direction: ${props.panel_config.media.width1.flex_direction};
// 					overflow-y: scroll
// 					background: red;
// 				}
// 		  `
// 		: null}
