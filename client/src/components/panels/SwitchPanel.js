import React, { useContext, useState } from 'react';
import Panel from '../panel_components/Panel';
import HeaderTag from '../general_components/HeaderTag';
import PTag from '../general_components/PTag';
import Switch2Way from '../general_components/Switch2Way';
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

const BodyInt3 = props => {
	return (
		<Panel
			{...props}
			panel_config={{
				display: 'flex',
				justify_content: 'space-between',
				align_items: 'center',
				flex_direction: 'column',
				width: 'auto',
				padding: '10px',
			}}
		/>
	);
};

const SwitchPanel = props => {
	const [switchP1, setSwitchP1] = useState(0);
	let options1 = {
		0: { key: 'option_1', position: 'Disabled' },
		1: { key: 'option_2', position: 'Enabled' },
	};
	const [switchP2, setSwitchP2] = useState(0);
	let options2 = {
		0: { key: 'option_1', position: 'Disabled' },
		1: { key: 'option_2', position: 'Enabled' },
	};
	const [switchP3, setSwitchP3] = useState(0);
	let options3 = {
		0: { key: 'option_1', position: 'Disabled' },
		1: { key: 'option_2', position: 'Enabled' },
	};
	const [switchP4, setSwitchP4] = useState(0);
	let options4 = {
		0: { key: 'option_1', position: 'Disabled' },
		1: { key: 'option_2', position: 'Enabled' },
	};
	const [switchP5, setSwitchP5] = useState(0);
	let options5 = {
		0: { key: 'option_1', position: 'Disabled' },
		1: { key: 'option_2', position: 'Enabled' },
	};
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
					text: 'Switch Pallet',
					margin: '10px',
					color: props => props.theme.panel_text,
				}}
			/>

			<Body {...props}>
				<BodyInt1 {...props}>
					<PTag
						ptag_config={{
							title: '2 Way Switch (v1)',
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
						<BodyInt3 {...props}>
							<PTag
								ptag_config={{
									title: options1[switchP1].position,
									color: props => props.theme.panel_text,
									margin: '0px 10px 0px 0px',
									font_weight: '600',
									font_size: '16px',
								}}
							/>
							<Switch2Way
								switch_config={{
									options: options1,
									position: switchP1,
									callback: setSwitchP1,
									width: 'auto',
									height: 'auto',
									slide_width: '45px',
									slide_height: 20,
									slide_type: 'circle',
									btn_dim: 25,
									btn_radius: '50%',
									margin: '10px 0 0 0',
								}}
							/>
						</BodyInt3>
					</BodyInt2>
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
						<BodyInt3 {...props}>
							<PTag
								ptag_config={{
									title: options1[switchP1].position,
									color: props => props.theme.panel_text,
									margin: '0px 10px 0px 0px',
									font_weight: '600',
									font_size: '16px',
								}}
							/>
							<Switch2Way
								switch_config={{
									options: options1,
									position: switchP1,
									callback: setSwitchP1,
									width: 'auto',
									height: 'auto',
									slide_width: '45px',
									slide_height: 20,
									slide_type: 'circle',
									btn_dim: 30,
									btn_radius: '50%',
									margin: '10px 0 0 0',
								}}
							/>
						</BodyInt3>
					</BodyInt2>
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
						<BodyInt3 {...props}>
							<PTag
								ptag_config={{
									title: options1[switchP1].position,
									color: props => props.theme.panel_text,
									margin: '0px 10px 0px 0px',
									font_weight: '600',
									font_size: '16px',
								}}
							/>
							<Switch2Way
								switch_config={{
									options: options1,
									position: switchP1,
									callback: setSwitchP1,
									width: 'auto',
									height: 'auto',
									slide_width: '45px',
									slide_height: 20,
									slide_type: 'circle',
									btn_dim: 35,
									btn_radius: '50%',
									margin: '10px 0 0 0',
								}}
							/>
						</BodyInt3>
					</BodyInt2>
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
						<BodyInt3 {...props}>
							<PTag
								ptag_config={{
									title: options1[switchP1].position,
									color: props => props.theme.panel_text,
									margin: '0px 10px 0px 0px',
									font_weight: '600',
									font_size: '16px',
								}}
							/>
							<Switch2Way
								switch_config={{
									options: options1,
									position: switchP1,
									callback: setSwitchP1,
									width: 'auto',
									height: 'auto',
									slide_width: '45px',
									slide_height: 20,
									slide_type: 'circle',
									btn_dim: 40,
									btn_radius: '50%',
									margin: '10px 0 0 0',
								}}
							/>
						</BodyInt3>
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
						<BodyInt3 {...props}>
							<PTag
								ptag_config={{
									title: options1[switchP2].position,
									color: props => props.theme.panel_text,
									margin: '0px 10px 0px 0px',
									font_weight: '600',
									font_size: '16px',
								}}
							/>
							<Switch2Way
								switch_config={{
									options: options2,
									position: switchP2,
									callback: setSwitchP2,
									width: 'auto',
									height: 'auto',
									slide_width: '45px',
									slide_height: 20,
									slide_type: 'circle',
									btn_dim: 30,
									btn_radius: '50%',
									margin: '10px 0 0 0',
									disabled: true,
								}}
							/>
						</BodyInt3>
					</BodyInt2>
				</BodyInt1>
				<BodyInt1 {...props}>
					<PTag
						ptag_config={{
							title: '2 Way Switch (v2)',
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
						<BodyInt3 {...props}>
							<PTag
								ptag_config={{
									title: options3[switchP3].position,
									color: props => props.theme.panel_text,
									margin: '0px 10px 0px 0px',
									font_weight: '600',
									font_size: '16px',
								}}
							/>
							<Switch2Way
								switch_config={{
									options: options3,
									position: switchP3,
									callback: setSwitchP3,
									width: 'auto',
									height: 'auto',
									slide_width: '60px',
									slide_height: 30,
									slide_type: 'circle',
									btn_dim: 15,
									btn_radius: '50%',
									margin: '10px 0 0 0',
								}}
							/>
						</BodyInt3>
					</BodyInt2>
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
						<BodyInt3 {...props}>
							<PTag
								ptag_config={{
									title: options3[switchP3].position,
									color: props => props.theme.panel_text,
									margin: '0px 10px 0px 0px',
									font_weight: '600',
									font_size: '16px',
								}}
							/>
							<Switch2Way
								switch_config={{
									options: options3,
									position: switchP3,
									callback: setSwitchP3,
									width: 'auto',
									height: 'auto',
									slide_width: '60px',
									slide_height: 30,
									slide_type: 'circle',
									btn_dim: 20,
									btn_radius: '50%',
									margin: '10px 0 0 0',
								}}
							/>
						</BodyInt3>
					</BodyInt2>
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
						<BodyInt3 {...props}>
							<PTag
								ptag_config={{
									title: options3[switchP3].position,
									color: props => props.theme.panel_text,
									margin: '0px 10px 0px 0px',
									font_weight: '600',
									font_size: '16px',
								}}
							/>
							<Switch2Way
								switch_config={{
									options: options3,
									position: switchP3,
									callback: setSwitchP3,
									width: 'auto',
									height: 'auto',
									slide_width: '60px',
									slide_height: 30,
									slide_type: 'circle',
									btn_dim: 25,
									btn_radius: '50%',
									margin: '10px 0 0 0',
								}}
							/>
						</BodyInt3>
					</BodyInt2>
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
						<BodyInt3 {...props}>
							<PTag
								ptag_config={{
									title: options3[switchP3].position,
									color: props => props.theme.panel_text,
									margin: '0px 10px 0px 0px',
									font_weight: '600',
									font_size: '16px',
								}}
							/>
							<Switch2Way
								switch_config={{
									options: options3,
									position: switchP3,
									callback: setSwitchP3,
									width: 'auto',
									height: 'auto',
									slide_width: '60px',
									slide_height: 30,
									slide_type: 'circle',
									btn_dim: 30,
									btn_radius: '50%',
									margin: '10px 0 0 0',
								}}
							/>
						</BodyInt3>
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
						<BodyInt3 {...props}>
							<PTag
								ptag_config={{
									title: options2[switchP2].position,
									color: props => props.theme.panel_text,
									margin: '0px 10px 0px 0px',
									font_weight: '600',
									font_size: '16px',
								}}
							/>
							<Switch2Way
								switch_config={{
									options: options2,
									position: switchP2,
									callback: setSwitchP2,
									width: 'auto',
									height: 'auto',
									slide_width: '60px',
									slide_height: 30,
									slide_type: 'circle',
									btn_dim: 20,
									btn_radius: '50%',
									margin: '10px 0 0 0',
									disabled: true,
								}}
							/>
						</BodyInt3>
					</BodyInt2>
				</BodyInt1>
				<BodyInt1 {...props}>
					<PTag
						ptag_config={{
							title: '2 Way Switch (v3)',
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
						<BodyInt3 {...props}>
							<PTag
								ptag_config={{
									title: options4[switchP4].position,
									color: props => props.theme.panel_text,
									margin: '0px 10px 0px 0px',
									font_weight: '600',
									font_size: '16px',
								}}
							/>
							<Switch2Way
								switch_config={{
									options: options4,
									position: switchP4,
									callback: setSwitchP4,
									width: 'auto',
									height: 'auto',
									slide_width: '45px',
									slide_height: 20,
									slide_type: 'square',
									btn_dim: 21,
									margin: '10px 0 0 0',
								}}
							/>
						</BodyInt3>
					</BodyInt2>
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
						<BodyInt3 {...props}>
							<PTag
								ptag_config={{
									title: options4[switchP4].position,
									color: props => props.theme.panel_text,
									margin: '0px 10px 0px 0px',
									font_weight: '600',
									font_size: '16px',
								}}
							/>
							<Switch2Way
								switch_config={{
									options: options4,
									position: switchP4,
									callback: setSwitchP4,
									width: 'auto',
									height: 'auto',
									slide_width: '45px',
									slide_height: 20,
									slide_type: 'square',
									btn_dim: 25,
									margin: '10px 0 0 0',
								}}
							/>
						</BodyInt3>
					</BodyInt2>
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
						<BodyInt3 {...props}>
							<PTag
								ptag_config={{
									title: options4[switchP4].position,
									color: props => props.theme.panel_text,
									margin: '0px 10px 0px 0px',
									font_weight: '600',
									font_size: '16px',
								}}
							/>
							<Switch2Way
								switch_config={{
									options: options4,
									position: switchP4,
									callback: setSwitchP4,
									width: 'auto',
									height: 'auto',
									slide_width: '45px',
									slide_height: 20,
									slide_type: 'square',
									btn_dim: 30,
									margin: '10px 0 0 0',
								}}
							/>
						</BodyInt3>
					</BodyInt2>
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
						<BodyInt3 {...props}>
							<PTag
								ptag_config={{
									title: options4[switchP4].position,
									color: props => props.theme.panel_text,
									margin: '0px 10px 0px 0px',
									font_weight: '600',
									font_size: '16px',
								}}
							/>
							<Switch2Way
								switch_config={{
									options: options4,
									position: switchP4,
									callback: setSwitchP4,
									width: 'auto',
									height: 'auto',
									slide_width: '45px',
									slide_height: 20,
									slide_type: 'square',
									btn_dim: 35,
									margin: '10px 0 0 0',
								}}
							/>
						</BodyInt3>
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
						<BodyInt3 {...props}>
							<PTag
								ptag_config={{
									title: options1[switchP2].position,
									color: props => props.theme.panel_text,
									margin: '0px 10px 0px 0px',
									font_weight: '600',
									font_size: '16px',
								}}
							/>
							<Switch2Way
								switch_config={{
									options: options2,
									position: switchP2,
									callback: setSwitchP2,
									width: 'auto',
									height: 'auto',
									slide_width: '45px',
									slide_height: 20,
									slide_type: 'square',
									btn_dim: 30,
									margin: '10px 0 0 0',
									disabled: true,
								}}
							/>
						</BodyInt3>
					</BodyInt2>
				</BodyInt1>
				<BodyInt1 {...props}>
					<PTag
						ptag_config={{
							title: '2 Way Switch (v2)',
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
						<BodyInt3 {...props}>
							<PTag
								ptag_config={{
									title: options5[switchP5].position,
									color: props => props.theme.panel_text,
									margin: '0px 10px 0px 0px',
									font_weight: '600',
									font_size: '16px',
								}}
							/>
							<Switch2Way
								switch_config={{
									options: options5,
									position: switchP5,
									callback: setSwitchP5,
									width: 'auto',
									height: 'auto',
									slide_width: '60px',
									slide_height: 30,
									slide_type: 'square',
									btn_dim: 15,
									margin: '10px 0 0 0',
								}}
							/>
						</BodyInt3>
					</BodyInt2>
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
						<BodyInt3 {...props}>
							<PTag
								ptag_config={{
									title: options5[switchP5].position,
									color: props => props.theme.panel_text,
									margin: '0px 10px 0px 0px',
									font_weight: '600',
									font_size: '16px',
								}}
							/>
							<Switch2Way
								switch_config={{
									options: options5,
									position: switchP5,
									callback: setSwitchP5,
									width: 'auto',
									height: 'auto',
									slide_width: '60px',
									slide_height: 30,
									slide_type: 'square',
									btn_dim: 20,
									margin: '10px 0 0 0',
								}}
							/>
						</BodyInt3>
					</BodyInt2>
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
						<BodyInt3 {...props}>
							<PTag
								ptag_config={{
									title: options5[switchP5].position,
									color: props => props.theme.panel_text,
									margin: '0px 10px 0px 0px',
									font_weight: '600',
									font_size: '16px',
								}}
							/>
							<Switch2Way
								switch_config={{
									options: options5,
									position: switchP5,
									callback: setSwitchP5,
									width: 'auto',
									height: 'auto',
									slide_width: '60px',
									slide_height: 30,
									slide_type: 'square',
									btn_dim: 25,
									margin: '10px 0 0 0',
								}}
							/>
						</BodyInt3>
					</BodyInt2>
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
						<BodyInt3 {...props}>
							<PTag
								ptag_config={{
									title: options5[switchP5].position,
									color: props => props.theme.panel_text,
									margin: '0px 10px 0px 0px',
									font_weight: '600',
									font_size: '16px',
								}}
							/>
							<Switch2Way
								switch_config={{
									options: options5,
									position: switchP5,
									callback: setSwitchP5,
									width: 'auto',
									height: 'auto',
									slide_width: '60px',
									slide_height: 30,
									slide_type: 'square',
									btn_dim: 30,
									margin: '10px 0 0 0',
								}}
							/>
						</BodyInt3>
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
						<BodyInt3 {...props}>
							<PTag
								ptag_config={{
									title: options2[switchP2].position,
									color: props => props.theme.panel_text,
									margin: '0px 10px 0px 0px',
									font_weight: '600',
									font_size: '16px',
								}}
							/>
							<Switch2Way
								switch_config={{
									options: options2,
									position: switchP2,
									callback: setSwitchP2,
									width: 'auto',
									height: 'auto',
									slide_width: '60px',
									slide_height: 30,
									slide_type: 'square',
									btn_dim: 20,
									margin: '10px 0 0 0',
									disabled: true,
								}}
							/>
						</BodyInt3>
					</BodyInt2>
				</BodyInt1>
			</Body>
		</Panel>
	);
};

export default SwitchPanel;
