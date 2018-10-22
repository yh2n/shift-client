import React from 'react';
import {shallow, mount} from 'enzyme';

import Shift from './Shift';

describe('<Shift />', () => {
    it('Renders without crashing', () => {
        shallow(<Shift />);
    });
});