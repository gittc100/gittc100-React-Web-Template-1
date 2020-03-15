import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import SVG from './SVG';
import GlobalContext from '../../context/GlobalContext';
require('dotenv').config();

const SBTN = styled.div`
	height: 15px;
	width: 15px;
	position: absolute;
	top: -2.5px;
	left: ${props => (props.switch_config && props.switch_config.right ? props.switch_config.right : '0')};
	border-radius: 50%;
	background-color: blue;
	transition: 0.4s;
	border: ${props => (props.switch_config && props.switch_config.border ? props.switch_config.border : 'none')};
    `;
    
    const Slide = styled.div`
	height: ${props => (props.switch_config && props.switch_config.slide_height ? props.switch_config.slide_height : '10px')};
	width: ${props => (props.switch_config && props.switch_config.slide_with ? props.switch_config.slide_with : '100%')};
	position: relative;
	background-color: ${props => (props.switch_config && props.switch_config.slide_background_color ? props.switch_config.slide_background_color : 'white')};
	border-radius: ${props => (props.switch_config && props.switch_config.slide_radius ? props.switch_config.slide_radius : '0px')};
    `;
  
    
    const Wrapper = styled.button`
	display: flex;
	align-items: center;
	height: 30px;
	width: 200px;
	background-color: transparent;
	border: 1px solid red;
	cursor: ${props => (props.switch_config && props.switch_config.cursor ? props.switch_config.cursor : 'pointer')};
`;

const Switch = props => {
	const context = useContext(GlobalContext);
	let { options, callback } = props.switch_config;

	const [position, setPosition] = useState(0);
	const [direction, setDirection] = useState(1);

	let divisions = options.length - 1;
	let percent = (position / divisions) * 100;

	console.log('position', position);
	console.log('divisions', divisions);
    console.log('percent', percent);
    
	useEffect(() => {
        if (options.length > 0 && context.theme !== options[position].key) {
            console.log('options[position].key', options[position].key);
			for (let s = 0; s < options.length; s++) {
				if (context.theme === options[s].key) {
					setPosition(s);
					break;
				}
			}
		}
	}, [context, context.theme, options]);

	const changePosition = () => {
		if (position === 0) {
			setDirection(1);
			setPosition(position + 1);
		} else if (position === options.length - 1) {
			setDirection(0);
			setPosition(position - 1);
		} else {
			if (direction === 0) {
				setPosition(position - 1);
			} else if (direction === 1) {
				setPosition(position + 1);
			}
        }
        callback(options[position].key);
	};

	return (
		<Wrapper
			{...props}
			onClick={event => {
				event.preventDefault();
				changePosition();
			}}
		>
			<Slide {...props}>
				<SBTN
					{...props}
					switch_config={{
						...props.switch_config,
						right: `${percent}%`,
					}}
				/>
			</Slide>
		</Wrapper>
	);
};

export default Switch;
