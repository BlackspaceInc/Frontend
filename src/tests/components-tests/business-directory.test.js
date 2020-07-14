import React from 'react';
import { shallow } from 'enzyme';
import BusinessDirectory from '../../components/business-directory/business-directory.component';

describe('BusinessDirectory', () => {
    let wrapper;
  
    beforeEach(() => wrapper = shallow(<BusinessDirectory />));
  
    it('should render a <div />', () => {
      expect(wrapper.find('div').length).toEqual(1);
    });

});

