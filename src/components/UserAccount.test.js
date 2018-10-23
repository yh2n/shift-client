import React from 'react';
import {shallow, mount} from 'enzyme';

import UserAccount from './UserAccount';

describe('<UserAccount />', () => {
    it('Renders without crashing', () => {
        shallow(<UserAccount />);
    });
});