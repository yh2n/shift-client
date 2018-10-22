import React from 'react';
import {shallow, mount} from 'enzyme';

import MenuIcon from './MenuIcon';

describe('<MenuIcon />', () => {
    it('Renders without crashing', () => {
        shallow(<MenuIcon />);
    });
});