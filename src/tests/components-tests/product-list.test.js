import React from 'react';
import { shallow } from 'enzyme';
import ProductList from '../../components/product-list/product-list.component';
import Product from '../../components/product/product.component';


describe('Product-list component', () => {
    let wrapper;
  
    beforeEach(() => wrapper = shallow(<ProductList />));
  
    it('should render a <div />', () => {
      expect(wrapper.find('div').length).toEqual(2);
    });
  
    it('should render a <h1 />', () => {
        expect(wrapper.find('h1').length).toEqual(1);
      });

    it('should render the Product Component', () => {
        expect(wrapper.containsMatchingElement(< Product/>)).toEqual(true);
      });
  });