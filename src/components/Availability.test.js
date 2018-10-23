import React from 'react';
import {shallow, mount} from 'enzyme';

import Availability from './Availability';

describe('<Availability />', () => {
    it('Renders without crashing', () => {
        shallow(<Availability />);
    });
});