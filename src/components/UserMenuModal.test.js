import React from 'react';
import {shallow, mount} from 'enzyme';

import UserMenuModal from './UserMenuModal';

describe('<UserMenuModal />', () => {
    it('Renders without crashing', () => {
        shallow(<UserMenuModal />);
    });
});