import React from 'react';
import {shallow, mount} from 'enzyme';

import AdminEmployeeDashboard from './AdminEmployeeDashboard';

const match = {params: {id: 1234567890}}

describe('<AdminEmployeeDashboard />', () => {
    it('Renders without crashing', () => {
        shallow(<AdminEmployeeDashboard match={match}/>);
    });
});