import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../../components/search-bar/search-bar.component.jsx';

describe('SearchBar', () => {
    it('should render a <div />', () => {
      const wrapper = shallow(<SearchBar />);
      expect(wrapper.find('div').length).toEqual(3);
    });
  });