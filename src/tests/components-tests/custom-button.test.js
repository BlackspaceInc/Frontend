import React from 'react';
import { shallow } from 'enzyme';
import CustomButton from '../../components/custom-button/custom-button.component';

describe('CustomButton page ', () => {
    let wrapper ; 

    beforeEach (()=> wrapper = shallow(<CustomButton/>));

    it('should render a <button/>', () => {
        expect(wrapper.find('button').length).toEqual(1);
      });
})