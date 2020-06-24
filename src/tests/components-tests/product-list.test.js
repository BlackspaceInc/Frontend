import React from 'react';
import { shallow } from 'enzyme';
import Product from '../../components/product.component.jsx';


describe('ProductlistComponent', () =>{
    let wrapper;
  
    beforeEach(() => wrapper = shallow(<SignInAndSignUpPage />));
  
    it('should render a <div />', () => {
      expect(wrapper.find('div').length).toEqual(1);
    });

    it('should render a <h1 />', () => {
        expect(wrapper.find('h1').length).toEqual(1);
    });

    it('should render the Product Component', () => {
        expect(wrapper.containsMatchingElement(< Product/>)).toEqual(true);
    });
})