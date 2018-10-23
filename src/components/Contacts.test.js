import React from 'react';
import {shallow, mount} from 'enzyme';

import Contacts from './Contacts';

describe('<Contacts />', () => {
    it('Renders without crashing', () => {
        shallow(<Contacts />);
    });
});