import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Page from './Page';
require('dotenv').config();

const SettingsPAge = props => {
	return <Page {...props}></Page>;
};

export default SettingsPAge;
