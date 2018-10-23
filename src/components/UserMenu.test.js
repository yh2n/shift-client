import React from 'react';
import {shallow, mount} from 'enzyme';
import 'client/mock-localstorage.js';

import UserMenu from './UserMenu';

describe('<UserMenu />', () => {
    it('Renders without crashing', () => {
        shallow(<UserMenu />);
    });
});