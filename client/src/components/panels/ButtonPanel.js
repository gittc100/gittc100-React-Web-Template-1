import React, { useContext, useState } from 'react';
import Panel from '../panel_components/Panel';
import HeaderTag from '../general_components/HeaderTag';
import PTag from '../general_components/PTag';
import Button from '../general_components/Button';
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

const ButtonPanel = props => {
	return (
		<Panel
			{...props}
			panel_config={{
				display: 'flex',
				flex_direction: 'column',
				justify_content: 'flex-start',
				align_items: 'center',
				width: 'auto',
				min_width: '200px',
				margin: '10px 0px 10px 10px',
				border_radius: '10px 10px 10px 10px',
				/* box_shadow: props => props.theme.panel_box_sadow, */
			}}
		>
			<HeaderTag
				{...props}
				header_config={{
					type: 'h2',
					text: 'Button Pallet',
					margin: '10px',
					color: props => props.theme.panel_text,
				}}
			/>

			<Body {...props}>
				<BodyInt1 {...props}>
					<PTag
						ptag_config={{
							title: 'Button (v1)',
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
						<Button
							svg_config={{
								type: 'none',
							}}
							button_config={{ padding: '5px 10px', border_radius: '20px' }}
							ptag_config={{
								title: 'Button',
								color: props => props.theme.button_text,
								margin: '0px 0px 0px 0px',
								font_weight: '600',
								font_size: '20px',
							}}
						/>
					</BodyInt2>
					<BodyInt2 {...props}>
						<PTag
							ptag_config={{
								title: 'Warning:',
								color: props => props.theme.panel_text,
								margin: '0px 10px 0px 0px',
								font_weight: '600',
								font_size: '20px',
							}}
						/>
						<Button
							svg_config={{
								type: 'none',
							}}
							button_config={{
								padding: '5px 10px',
								border_radius: '20px',
								background_color: props => props.theme.button_active_warning,
								background_color_hover: props => props.theme.button_hover_warning,
							}}
							ptag_config={{
								title: 'Button',
								color: props => props.theme.button_text,
								margin: '0px 0px 0px 0px',
								font_weight: '600',
								font_size: '20px',
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
						<Button
							svg_config={{
								type: 'none',
							}}
							button_config={{
								padding: '5px 10px',
								border_radius: '20px',
								background_color: props => props.theme.button_disabled,
								background_color_hover: props => props.theme.button_disabled,
								cursor: 'initial',
								outline: 'none',
							}}
							ptag_config={{
								title: 'Button',
								color: props => props.theme.button_text,
								margin: '0px 0px 0px 0px',
								font_weight: '600',
								font_size: '20px',
								button_box_sadow: 'none',
							}}
						/>
					</BodyInt2>
				</BodyInt1>
				<BodyInt1 {...props}>
					<PTag
						ptag_config={{
							title: 'Button (v2)',
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
						<Button
							svg_config={{
								type: 'none',
							}}
							button_config={{ padding: '5px 10px', border_radius: '10px' }}
							ptag_config={{
								title: 'Button',
								color: props => props.theme.button_text,
								margin: '0px 0px 0px 0px',
								font_weight: '600',
								font_size: '20px',
							}}
						/>
					</BodyInt2>
					<BodyInt2 {...props}>
						<PTag
							ptag_config={{
								title: 'Warning:',
								color: props => props.theme.panel_text,
								margin: '0px 10px 0px 0px',
								font_weight: '600',
								font_size: '20px',
							}}
						/>
						<Button
							svg_config={{
								type: 'none',
							}}
							button_config={{
								padding: '5px 10px',
								border_radius: '10px',
								background_color: props => props.theme.button_active_warning,
								background_color_hover: props => props.theme.button_hover_warning,
							}}
							ptag_config={{
								title: 'Button',
								color: props => props.theme.button_text,
								margin: '0px 0px 0px 0px',
								font_weight: '600',
								font_size: '20px',
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
						<Button
							svg_config={{
								type: 'none',
							}}
							button_config={{
								padding: '5px 10px',
								border_radius: '10px',
								background_color: props => props.theme.button_disabled,
								background_color_hover: props => props.theme.button_disabled,
								cursor: 'initial',
								outline: 'none',
							}}
							ptag_config={{
								title: 'Button',
								color: props => props.theme.button_text,
								margin: '0px 0px 0px 0px',
								font_weight: '600',
								font_size: '20px',
								button_box_sadow: 'none',
							}}
						/>
					</BodyInt2>
				</BodyInt1>
				<BodyInt1 {...props}>
					<PTag
						ptag_config={{
							title: 'Button (v3)',
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
						<Button
							svg_config={{
								type: 'none',
							}}
							button_config={{ padding: '5px 10px', border_radius: '0px' }}
							ptag_config={{
								title: 'Button',
								color: props => props.theme.button_text,
								margin: '0px 0px 0px 0px',
								font_weight: '600',
								font_size: '20px',
							}}
						/>
					</BodyInt2>
					<BodyInt2 {...props}>
						<PTag
							ptag_config={{
								title: 'Warning:',
								color: props => props.theme.panel_text,
								margin: '0px 10px 0px 0px',
								font_weight: '600',
								font_size: '20px',
							}}
						/>
						<Button
							svg_config={{
								type: 'none',
							}}
							button_config={{
								padding: '5px 10px',
								border_radius: '0px',
								background_color: props => props.theme.button_active_warning,
								background_color_hover: props => props.theme.button_hover_warning,
							}}
							ptag_config={{
								title: 'Button',
								color: props => props.theme.button_text,
								margin: '0px 0px 0px 0px',
								font_weight: '600',
								font_size: '20px',
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
						<Button
							svg_config={{
								type: 'none',
							}}
							button_config={{
								padding: '5px 10px',
								border_radius: '0px',
								background_color: props => props.theme.button_disabled,
								background_color_hover: props => props.theme.button_disabled,
								cursor: 'initial',
								outline: 'none',
							}}
							ptag_config={{
								title: 'Button',
								color: props => props.theme.button_text,
								margin: '0px 0px 0px 0px',
								font_weight: '600',
								font_size: '20px',
								button_box_sadow: 'none',
							}}
						/>
					</BodyInt2>
				</BodyInt1>
				<BodyInt1 {...props}>
					<PTag
						ptag_config={{
							title: 'SVG Button (v1)',
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
						<Button
							svg_config={{ width: '30px', height: '30px', type: 'home' }}
							button_config={{ padding: '5px', border_radius: '50%' }}
						/>
					</BodyInt2>
					<BodyInt2 {...props}>
						<PTag
							ptag_config={{
								title: 'Warning:',
								color: props => props.theme.panel_text,
								margin: '0px 10px 0px 0px',
								font_weight: '600',
								font_size: '20px',
							}}
						/>
						<Button
							svg_config={{ width: '30px', height: '30px', type: 'home' }}
							button_config={{
								padding: '5px',
								border_radius: '50%',
								background_color: props => props.theme.button_active_warning,
								background_color_hover: props => props.theme.button_hover_warning,
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
						<Button
							svg_config={{ width: '30px', height: '30px', type: 'home' }}
							button_config={{
								padding: '5px',
								border_radius: '50%',
								background_color: props => props.theme.button_disabled,
								background_color_hover: props => props.theme.button_disabled,
								cursor: 'initial',
								outline: 'none',
							}}
						/>
					</BodyInt2>
				</BodyInt1>
				<BodyInt1 {...props}>
					<PTag
						ptag_config={{
							title: 'SVG Button (v2)',
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
						<Button
							svg_config={{ width: '30px', height: '30px', type: 'home' }}
							button_config={{ padding: '5px', border_radius: '10px' }}
						/>
					</BodyInt2>
					<BodyInt2 {...props}>
						<PTag
							ptag_config={{
								title: 'Warning:',
								color: props => props.theme.panel_text,
								margin: '0px 10px 0px 0px',
								font_weight: '600',
								font_size: '20px',
							}}
						/>
						<Button
							svg_config={{ width: '30px', height: '30px', type: 'home' }}
							button_config={{
								padding: '5px',
								border_radius: '10px',
								background_color: props => props.theme.button_active_warning,
								background_color_hover: props => props.theme.button_hover_warning,
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
						<Button
							svg_config={{ width: '30px', height: '30px', type: 'home' }}
							button_config={{
								padding: '5px',
								border_radius: '10px',
								background_color: props => props.theme.button_disabled,
								background_color_hover: props => props.theme.button_disabled,
								cursor: 'initial',
								outline: 'none',
							}}
						/>
					</BodyInt2>
				</BodyInt1>
				<BodyInt1 {...props}>
					<PTag
						ptag_config={{
							title: 'SVG Button (v3)',
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
						<Button
							svg_config={{ width: '30px', height: '30px', type: 'home' }}
							button_config={{ padding: '5px' }}
						/>
					</BodyInt2>
					<BodyInt2 {...props}>
						<PTag
							ptag_config={{
								title: 'Warning:',
								color: props => props.theme.panel_text,
								margin: '0px 10px 0px 0px',
								font_weight: '600',
								font_size: '20px',
							}}
						/>
						<Button
							svg_config={{ width: '30px', height: '30px', type: 'home' }}
							button_config={{
								padding: '5px',
								background_color: props => props.theme.button_active_warning,
								background_color_hover: props => props.theme.button_hover_warning,
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
						<Button
							svg_config={{ width: '30px', height: '30px', type: 'home' }}
							button_config={{
								padding: '5px',
								background_color: props => props.theme.button_disabled,
								background_color_hover: props => props.theme.button_disabled,
								cursor: 'initial',
								outline: 'none',
							}}
						/>
					</BodyInt2>
				</BodyInt1>
				<BodyInt1 {...props}>
					<PTag
						ptag_config={{
							title: 'SVG&TEXT Button (v1)',
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
						<Button
							svg_config={{ width: '20px', height: '20px', type: 'home' }}
							button_config={{ padding: '5px 10px', border_radius: '20px' }}
							ptag_config={{
								title: 'Button',
								color: props => props.theme.button_text,
								margin: '0px 0px 0px 5px',
								font_weight: '600',
								font_size: '20px',
							}}
						/>
					</BodyInt2>
					<BodyInt2 {...props}>
						<PTag
							ptag_config={{
								title: 'Warning:',
								color: props => props.theme.panel_text,
								margin: '0px 10px 0px 0px',
								font_weight: '600',
								font_size: '20px',
							}}
						/>
						<Button
							svg_config={{ width: '20px', height: '20px', type: 'home' }}
							button_config={{
								padding: '5px 10px',
								border_radius: '20px',
								background_color: props => props.theme.button_active_warning,
								background_color_hover: props => props.theme.button_hover_warning,
							}}
							ptag_config={{
								title: 'Button',
								color: props => props.theme.button_text,
								margin: '0px 0px 0px 5px',
								font_weight: '600',
								font_size: '20px',
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
						<Button
							svg_config={{ width: '20px', height: '20px', type: 'home' }}
							button_config={{
								padding: '5px 10px',
								border_radius: '20px',
								background_color: props => props.theme.button_disabled,
								background_color_hover: props => props.theme.button_disabled,
								cursor: 'initial',
								outline: 'none',
							}}
							ptag_config={{
								title: 'Button',
								color: props => props.theme.button_text,
								margin: '0px 0px 0px 5px',
								font_weight: '600',
								font_size: '20px',
								button_box_sadow: 'none',
							}}
						/>
					</BodyInt2>
				</BodyInt1>
				<BodyInt1 {...props}>
					<PTag
						ptag_config={{
							title: 'SVG&TEXT Button (v2)',
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
						<Button
							svg_config={{ width: '20px', height: '20px', type: 'home' }}
							button_config={{ padding: '5px 10px', border_radius: '10px' }}
							ptag_config={{
								title: 'Button',
								color: props => props.theme.button_text,
								margin: '0px 0px 0px 5px',
								font_weight: '600',
								font_size: '20px',
							}}
						/>
					</BodyInt2>
					<BodyInt2 {...props}>
						<PTag
							ptag_config={{
								title: 'Warning:',
								color: props => props.theme.panel_text,
								margin: '0px 10px 0px 0px',
								font_weight: '600',
								font_size: '20px',
							}}
						/>
						<Button
							svg_config={{ width: '20px', height: '20px', type: 'home' }}
							button_config={{
								padding: '5px 10px',
								border_radius: '10px',
								background_color: props => props.theme.button_active_warning,
								background_color_hover: props => props.theme.button_hover_warning,
							}}
							ptag_config={{
								title: 'Button',
								color: props => props.theme.button_text,
								margin: '0px 0px 0px 5px',
								font_weight: '600',
								font_size: '20px',
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
						<Button
							svg_config={{ width: '20px', height: '20px', type: 'home' }}
							button_config={{
								padding: '5px 10px',
								border_radius: '10px',
								background_color: props => props.theme.button_disabled,
								background_color_hover: props => props.theme.button_disabled,
								cursor: 'initial',
								outline: 'none',
							}}
							ptag_config={{
								title: 'Button',
								color: props => props.theme.button_text,
								margin: '0px 0px 0px 5px',
								font_weight: '600',
								font_size: '20px',
								button_box_sadow: 'none',
							}}
						/>
					</BodyInt2>
				</BodyInt1>
				<BodyInt1 {...props}>
					<PTag
						ptag_config={{
							title: 'SVG&TEXT Button (v3)',
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
						<Button
							svg_config={{ width: '20px', height: '20px', type: 'home' }}
							button_config={{ padding: '5px 10px' }}
							ptag_config={{
								title: 'Button',
								color: props => props.theme.button_text,
								margin: '0px 0px 0px 5px',
								font_weight: '600',
								font_size: '20px',
							}}
						/>
					</BodyInt2>
					<BodyInt2 {...props}>
						<PTag
							ptag_config={{
								title: 'Warning:',
								color: props => props.theme.panel_text,
								margin: '0px 10px 0px 0px',
								font_weight: '600',
								font_size: '20px',
							}}
						/>
						<Button
							svg_config={{ width: '20px', height: '20px', type: 'home' }}
							button_config={{
								padding: '5px 10px',

								background_color: props => props.theme.button_active_warning,
								background_color_hover: props => props.theme.button_hover_warning,
							}}
							ptag_config={{
								title: 'Button',
								color: props => props.theme.button_text,
								margin: '0px 0px 0px 5px',
								font_weight: '600',
								font_size: '20px',
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
						<Button
							svg_config={{ width: '20px', height: '20px', type: 'home' }}
							button_config={{
								padding: '5px 10px',

								background_color: props => props.theme.button_disabled,
								background_color_hover: props => props.theme.button_disabled,
								cursor: 'initial',
								outline: 'none',
							}}
							ptag_config={{
								title: 'Button',
								color: props => props.theme.button_text,
								margin: '0px 0px 0px 5px',
								font_weight: '600',
								font_size: '20px',
								button_box_sadow: 'none',
							}}
						/>
					</BodyInt2>
				</BodyInt1>
			</Body>
		</Panel>
	);
};

export default ButtonPanel;
