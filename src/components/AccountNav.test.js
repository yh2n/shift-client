import React from 'react';
import {shallow, mount} from 'enzyme';

import AccountNav from './AccountNav';

describe('<AccountNav />', () => {
    it('Renders without crashing', () => {
        shallow(<MenuIcon />);
    });
});