import React from 'react';
import {shallow, mount} from 'enzyme';

import Employees from './StaffData';

describe('<Employees />', () => {
    it('Renders without crashing', () => {
        shallow(<Employees />);
    });
});