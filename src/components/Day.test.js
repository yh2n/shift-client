import React from 'react';
import {shallow, mount} from 'enzyme';

import  Weekday, { Weekendday }  from './Day';

describe('<Weekday />', () => {
    it('Renders without crashing', () => {
        shallow(<Weekday />);
    });
});

describe('<Weekendday />', () => {
    it('Renders without crashing', () => {
        shallow(<Weekendday />);
    });
});

