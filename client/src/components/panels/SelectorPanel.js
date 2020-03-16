import React, { useContext, useState } from 'react';
import Panel from '../panel_components/Panel';
import HeaderTag from '../general_components/HeaderTag';
import PTag from '../general_components/PTag';
import Selector from '../general_components/Selector';
require('dotenv').config();

const Body = props => {
	return (
		<Panel
			{...props}
			panel_config={{
				display: 'flex',
				justify_content: 'flex-start',
				align_items: 'flex-start',
				flex_direction: 'row',
				flex_wrap: 'wrap',
				width: '100%',
				height: '100%',
				padding: '0px 0px 10px 0px',
				border_radius: '10px',
			}}
		/>
	);
};

const BodyInt1 = props => {
	return (
		<Panel
			{...props}
			panel_config={{
				display: 'flex',
				justify_content: 'flex-start',
				align_items: 'center',
				flex_direction: 'column',
				width: '100%',
				min_width: '200px',
				max_width: '300px',
				padding: '10px',
				margin: '10px',
				border_radius: '10px',
				box_shadow: props => props.theme.panel_box_sadow,
			}}
		/>
	);
};

const BodyInt2 = props => {
	return (
		<Panel
			{...props}
			panel_config={{
				display: 'flex',
				justify_content: 'space-between',
				align_items: 'center',
				flex_direction: 'row',
				width: '100%',
				padding: '10px',
			}}
		/>
	);
};

const SelectorPanel = props => {
	return (
		<Panel
			{...props}
			panel_config={{
				display: 'flex',
				flex_direction: 'column',
				justify_content: 'flex-start',
				align_items: 'center',
				width: '100%',
				min_width: '200px',
				margin: '10px 0px 10px 10px',
				border_radius: '10px 10px 10px 10px',
			}}
		>
			<HeaderTag
				{...props}
				header_config={{
					type: 'h2',
					text: 'Selector Pallet',
					margin: '10px',
					color: props => props.theme.panel_text,
				}}
			/>

			<Body {...props}>
				<BodyInt1 {...props}>
					<PTag
						ptag_config={{
							title: 'Oval Selector',
							color: props => props.theme.panel_text,
							margin: '0px 0px 0px 0px',
							font_weight: '600',
							font_size: '20px',
						}}
					/>
					<BodyInt2 {...props}>
						<PTag
							ptag_config={{
								title: 'Active:',
								color: props => props.theme.panel_text,
								margin: '0px 10px 0px 0px',
								font_weight: '600',
								font_size: '20px',
							}}
						/>
						<Selector
							{...props}
							select_config={{
								options: [
									{ key: 'option_1', value: { title: 'Option 1' } },
									{ key: 'option_2', value: { title: 'Option 2' } },
									{ key: 'option_3', value: { title: 'Option 3' } },
									{ key: 'option_4', value: { title: 'Option 4' } },
								],
								callback: null,
								font_weight: '600',
								font_size: '20px',
								padding: '5px',
								border_radius: '25px'
							}}
						/>
					</BodyInt2>
					<BodyInt2 {...props}>
						<PTag
							ptag_config={{
								title: 'Disabled:',
								color: props => props.theme.panel_text,
								margin: '0px 10px 0px 0px',
								font_weight: '600',
								font_size: '20px',
							}}
						/>
						<Selector
							{...props}
							select_config={{
								options: [
									{ key: 'option_1', value: { title: 'Option 1' } },
									{ key: 'option_2', value: { title: 'Option 2' } },
									{ key: 'option_3', value: { title: 'Option 3' } },
									{ key: 'option_4', value: { title: 'Option 4' } },
								],
								callback: null,
								font_weight: '600',
								font_size: '20px',
								padding: '5px',
								border_radius: '25px',
								background_color: props => props.theme.button_disabled,
								background_color_hover: props => props.theme.button_disabled,
								cursor: 'initial',
								outline: 'none',
								disabled: true
							}}
						/>
					</BodyInt2>
				</BodyInt1>
				<BodyInt1 {...props}>
					<PTag
						ptag_config={{
							title: 'Oval Selector',
							color: props => props.theme.panel_text,
							margin: '0px 0px 0px 0px',
							font_weight: '600',
							font_size: '20px',
						}}
					/>
					<BodyInt2 {...props}>
						<PTag
							ptag_config={{
								title: 'Active:',
								color: props => props.theme.panel_text,
								margin: '0px 10px 0px 0px',
								font_weight: '600',
								font_size: '20px',
							}}
						/>
						<Selector
							{...props}
							select_config={{
								options: [
									{ key: 'option_1', value: { title: 'Option 1' } },
									{ key: 'option_2', value: { title: 'Option 2' } },
									{ key: 'option_3', value: { title: 'Option 3' } },
									{ key: 'option_4', value: { title: 'Option 4' } },
								],
								callback: null,
								font_weight: '600',
								font_size: '20px',
								padding: '5px',
								border_radius: '5px'
							}}
						/>
					</BodyInt2>
					<BodyInt2 {...props}>
						<PTag
							ptag_config={{
								title: 'Disabled:',
								color: props => props.theme.panel_text,
								margin: '0px 10px 0px 0px',
								font_weight: '600',
								font_size: '20px',
							}}
						/>
						<Selector
							{...props}
							select_config={{
								options: [
									{ key: 'option_1', value: { title: 'Option 1' } },
									{ key: 'option_2', value: { title: 'Option 2' } },
									{ key: 'option_3', value: { title: 'Option 3' } },
									{ key: 'option_4', value: { title: 'Option 4' } },
								],
								callback: null,
								font_weight: '600',
								font_size: '20px',
								padding: '5px',
								border_radius: '5px',
								background_color: props => props.theme.button_disabled,
								background_color_hover: props => props.theme.button_disabled,
								cursor: 'initial',
								outline: 'none',
								disabled: true
							}}
						/>
					</BodyInt2>
				</BodyInt1>
				<BodyInt1 {...props}>
					<PTag
						ptag_config={{
							title: 'Oval Selector',
							color: props => props.theme.panel_text,
							margin: '0px 0px 0px 0px',
							font_weight: '600',
							font_size: '20px',
						}}
					/>
					<BodyInt2 {...props}>
						<PTag
							ptag_config={{
								title: 'Active:',
								color: props => props.theme.panel_text,
								margin: '0px 10px 0px 0px',
								font_weight: '600',
								font_size: '20px',
							}}
						/>
						<Selector
							{...props}
							select_config={{
								options: [
									{ key: 'option_1', value: { title: 'Option 1' } },
									{ key: 'option_2', value: { title: 'Option 2' } },
									{ key: 'option_3', value: { title: 'Option 3' } },
									{ key: 'option_4', value: { title: 'Option 4' } },
								],
								callback: null,
								font_weight: '600',
								font_size: '20px',
								padding: '5px',
							}}
						/>
					</BodyInt2>
					<BodyInt2 {...props}>
						<PTag
							ptag_config={{
								title: 'Disabled:',
								color: props => props.theme.panel_text,
								margin: '0px 10px 0px 0px',
								font_weight: '600',
								font_size: '20px',
							}}
						/>
						<Selector
							{...props}
							select_config={{
								options: [
									{ key: 'option_1', value: { title: 'Option 1' } },
									{ key: 'option_2', value: { title: 'Option 2' } },
									{ key: 'option_3', value: { title: 'Option 3' } },
									{ key: 'option_4', value: { title: 'Option 4' } },
								],
								callback: null,
								font_weight: '600',
								font_size: '20px',
								padding: '5px',
								background_color: props => props.theme.button_disabled,
								background_color_hover: props => props.theme.button_disabled,
								cursor: 'initial',
								outline: 'none',
								disabled: true
							}}
						/>
					</BodyInt2>
				</BodyInt1>
			</Body>
		</Panel>
	);
};

export default SelectorPanel;
