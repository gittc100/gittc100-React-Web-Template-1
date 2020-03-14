import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Page from './Page';
require('dotenv').config();

const ButtonPage = props => {
	return <Page {...props}></Page>;
};

export default ButtonPage;
