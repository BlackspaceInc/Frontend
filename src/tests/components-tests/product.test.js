import React from 'react';
import { shallow } from 'enzyme';
import Product from '../../components/product/product.component';

describe('Footer page ', () => {
    let wrapper ; 

    beforeEach (()=> wrapper = shallow(<Product/>));

    it('should render a <div/>', () => {
        expect(wrapper.find('div').length).toEqual(1);
      });
})