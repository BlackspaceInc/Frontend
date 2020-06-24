import React from 'react';
import { shallow } from 'enzyme';
import Product from '../../components/product/product.component';

describe('Product page ', () => {
    let wrapper ; 

    beforeEach (()=> wrapper = shallow(<Product/>));

    it('should render a <div/>', () => {
        expect(wrapper.find('div').length).toEqual(1);
      });

    it('should render a <Card/>', () => {
        expect(wrapper.find('Card').length).toEqual(1);
      });

    it('should render a <Image/>', () => {
        expect(wrapper.find('Image').length).toEqual(1);
      });
})