import React from 'react';
import {shallow, mount} from 'enzyme';

import AdminPage from './AdminPage';

describe('<AdminPage />', () => {
    it('Renders without crashing', () => {
        shallow(<AdminPage />);
    });
});