import React from 'react';
import {shallow, mount} from 'enzyme';

import AdminEmployeeDashboard from './AdminEmployeeDashboard';

describe('<AdminEmployeeDashboard />', () => {
    it('Renders without crashing', () => {
        shallow(<AdminEmployeeDashboard />);
    });
});