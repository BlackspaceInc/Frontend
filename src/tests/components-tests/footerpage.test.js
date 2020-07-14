import React from 'react';
import { shallow } from 'enzyme';
import Footerpage from '../../pages/footerpage/footerpage.component.jsx';

describe('FooterPage', () => {
  it('should render a <div />', () => {
    const wrapper = shallow(<Footerpage />);
    expect(wrapper.find('div').length).toEqual(1);
  });
});