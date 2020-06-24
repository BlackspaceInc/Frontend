import React from 'react';
import { shallow } from 'enzyme';
import Footerpage from '../../pages/footerpage/footerpage.component';

describe('Footer page ', () => {
    let wrapper ; 

    beforeEach (()=> wrapper = shallow(<Footerpage/>));

    it('should render a <div/>', () => {
        expect(wrapper.find('div').length).toEqual(2);
      });
})