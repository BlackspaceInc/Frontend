import React from 'react';
import { shallow } from 'enzyme';
import FormInput from '../../components/form-input/form-input.component';

describe('FormInput page ', () => {
    let wrapper ; 

    beforeEach (()=> wrapper = shallow(<FormInput/>));

    it('should render a <div/>', () => {
        expect(wrapper.find('div').length).toEqual(1);
      });

    it('should render a <input/>', () => {
        expect(wrapper.find('input').length).toEqual(1);
      });
})