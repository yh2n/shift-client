import React from 'react';
import {shallow, mount} from 'enzyme';

import AdminSchedule from './AdminSchedule';

describe('<AdminSchedule />', () => {
    it('renders without crashing', () => {
        shallow(<AdminSchedule />);
    });
});


