import React from 'react';
import { shallow } from 'enzyme';
import AboutUs from '../../pages/about-us/about-us.component';

describe('AboutUs', () => {
    let wrapper;
  
    beforeEach(() => wrapper = shallow(<AboutUs />));
  
    it('should render a <div />', () => {
      expect(wrapper.find('div').length).toEqual(21);
    });

});