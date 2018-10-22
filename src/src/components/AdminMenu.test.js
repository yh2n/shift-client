import React from 'react';
import {shallow, mount} from 'enzyme';

import AdminMenu from './AdminMenu';

describe('<AdminMenu />', () => {
    it('Renders without crashing', () => {
        shallow(<AdminMenu />);
    });
});