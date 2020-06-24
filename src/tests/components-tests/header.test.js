import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/header/header.component';

describe('Header component', () => {
    let wrapper ; 

    beforeEach (()=> wrapper = shallow(<Header/>));

    it('should render a <div/>', () => {
        expect(wrapper.find('div').length).toEqual(3);
      });

      it('should render a <Link/>', () => {
        expect(wrapper.find('Link').length).toEqual(5);
      });
})
